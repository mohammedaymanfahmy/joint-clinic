import { Patient } from "modules/patient/domain/Patient";
import { PatientRepoPort } from "../ports/PatientRepoPort";

type GetPatientResult =
    | { ok: true; patient: Patient }
    | { ok: false; error: string }

export class GetPatient {
    constructor(private patientRepo: PatientRepoPort) { }
    async exec(patientId: string): Promise<GetPatientResult> {
        try {
            const patient = await this.patientRepo.getPatient(patientId);
            if (!patient) {
                return { ok: false, error: "Patient not found" };
            }
            return { ok: true, patient };
        } catch (err) {
            console.error("[GetPatient.exec] Error:", (err as any).message);
            return { ok: false, error: "Internal error" };
        }
    }
}
