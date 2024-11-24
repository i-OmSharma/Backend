import mongoose from "mongoose";

const medicalRecordScherma = new mongoose.Schema({}, {timestamps: true})

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordScherma) 