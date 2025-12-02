import mongoose, { Schema } from "mongoose";

const PatientSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  guardianInformation: { type: Schema.Types.ObjectId, ref: "Guardian" },
  medicalRecordNumber: String,
  insuranceId: String,
  bloodGroup: String,
  allergies: [String],
  //   check the medical history
  medicalHistory: [String],
  notes: String
});

export const PatientModel = mongoose.model("Patient", PatientSchema);