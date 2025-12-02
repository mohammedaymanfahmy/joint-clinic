import { Patient } from "modules/patient/domain/Patient";
import { PatientRepoPort } from "../ports/PatientRepoPort";

type UpdatePatientResult =
    | { ok: true; patient: Patient }
    | { ok: false; error: string }

type PatientKeys = keyof Patient;

export class UpdatePatient {
    constructor(private patientRepo: PatientRepoPort) { }

    async exec(patientId: string, updateData: Partial<Patient>): Promise<UpdatePatientResult> {
        try {
            const patient = await this.patientRepo.getPatient(patientId);
            if (!patient) return { ok: false, error: "Patient not found" };

            const allowedFields: (keyof Patient)[] = [
                "_id",
                "userId",
                "guardianInformation",
                "medicalRecordNumber",
                "insuranceId",
                "bloodGroup",
                "allergies",
                "medicalHistory",
                "notes"
            ];
            const invalidKeys = Object.keys(updateData).filter(
                (key) => !allowedFields.includes(key as keyof Patient)
            );
            if (invalidKeys.length > 0) {
                return { ok: false, error: `Invalid fields: ${invalidKeys.join(', ')}` };
            }

            const mergedData = {...patient, ...updateData}
            const updatedPatient = await this.patientRepo.updatePatient(patientId, mergedData);
            if (!updatedPatient) {
                return { ok: false, error: "Failed to update patient" };
            }
            return { ok: true, patient: updatedPatient as any as Patient };
        } catch (error) {
            console.error("[UpdatePatient.exec] Error:", (error as any).message);
            return { ok: false, error: "Internal error" };
        }
    }
}