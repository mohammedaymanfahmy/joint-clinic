import { resolve } from "app/container";
import { PATIENT_REPO } from "app/container.bindings";
import { Request, Response } from "express";
import { GetPatient } from "modules/patient/application/use-cases/GetPatient";
import { UpdatePatient } from "modules/patient/application/use-cases/UpdatePatient";

export async function getPatientById (req: Request, res: Response) {
    const patientId = req.params.id;
    const uc = new GetPatient(resolve(PATIENT_REPO));
    const result = await uc.exec(patientId);
    if (result.ok) {
        res.status(200).json(result);
    } else {
        console.error("[getPatientById] Error:", result.error);
        res.status(404).json({ error: result.error });
    }
}

export async function updatePatient (req: Request, res: Response) {
    const patientId = req.params.id;
    const updateData = req.body;
    const uc = new UpdatePatient(resolve(PATIENT_REPO));
    const result = await uc.exec(patientId, updateData);
    if (result.ok) {
        res.status(200).json(result);
    } else {
        console.error("[updatePatient] Error:", result.error);
        res.status(400).json({ error: result.error });
    }
}