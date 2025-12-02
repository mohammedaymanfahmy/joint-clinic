export interface Patient {
    _id: string,
    userId: string,
    guardianInformation: string,
    medicalRecordNumber: String,
    insuranceId: String,
    bloodGroup: String,
    allergies: [String],
    //   check the medical history
    medicalHistory: [String],
    notes: String
}