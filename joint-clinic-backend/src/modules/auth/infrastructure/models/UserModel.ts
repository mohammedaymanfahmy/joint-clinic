import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    role: {
      type: String,
      enum: ['Patient', 'Doctor', 'Admin', 'Staff'],
      required: true,
      default: 'Patient'
    },
    name: { type: String, required: true },
    // check email and phone are indexed for faster lookup but without harm performance
    // email: { type: String, lowercase: true, trim: true, required: false },
    // phone: { type: String, trim: true, required: false },
    // should i make it contact instead of separate email and phone?
    contact: { type: String, trim: true, required: true },

    // check all the required fields for patient profile
    birthdate: { type: Date, required: true },
    gender: { type: String, enum: ['Male', 'Female'], required: true },
    identifier: { type: String, required: false },
    nationality: { type: String, required: false },
    address: { type: String, required: false },
    city: { type: String, required: false },

    // is it for email or phone? or NID and Iqama Id?
    identifierType: {
      type: String,
    //   enum: ['email', 'phone'],
    // enum: ['nid', 'iqama'],
      required: false
    },

    maritalStatus: {
      type: String,
      enum: ['Single', 'Married', 'Divorced', 'Widowed'],
      required: false
    },
    speakingLanguages: [{ type: String }],

    // guardian info for minors
    guardianName: { type: String, required: false },
    guardianEmail: { type: String, required: false },
    guardianPhone: { type: String, required: false },
    guardianBloodType: { type: String, required: false },
    patientCategory: { type: String, required: false },

    // add from me 
    guardianRelation: { type: String, required: false },

    guardianIdentifier: { type: String, required: false },
    guardianIdentifierType: {
      type: String,
    //   enum: ['nid', 'iqama'],
      required: false
    },


    // account status
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active'
    },
    createdAt: {
      type: Date,
      default: () => new Date(),
      immutable: true
    }
  },
  {
    // Ensure createdAt and updatedAt are stored as UTC ISODate
    timestamps: {
      currentTime: () => new Date()
    },
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Optional: add unique constraint for phone/email if needed
// UserSchema.index({ email: 1 }, { unique: false, sparse: true });
// UserSchema.index({ phone: 1 }, { unique: false, sparse: true });

export const UserModel = mongoose.model('User', UserSchema);
