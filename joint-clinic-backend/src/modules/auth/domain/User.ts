export type Role = 'Patient' | 'Doctor' | 'Admin' | 'Staff';
export type Gender = 'Male' | 'Female' | 'male' | 'female';
export type MaritalStatus = 'Single' | 'Married' | 'Divorced' | 'Widowed';
export type AccountStatus = 'active' | 'inactive';
export type IdentifierType = 'email' | 'phone' | 'nid' | 'iqama' | undefined;

export interface User {
  _id: string;
  role: Role;
  fullName: string;
  // email?: string;
  // phone?: string;
  contact: string;
  birthdate: Date;
  gender: Gender;
  identifier?: string;
  identifierType?: IdentifierType;
  nationality?: string;
  address?: string;
  city?: string;
  maritalStatus?: MaritalStatus;
  speakingLanguages?: string[];
  guardianName?: string;
  guardianEmail?: string;
  guardianPhone?: string;
  guardianBloodType?: string;
  guardianRelation?: string;
  guardianIdentifier?: string;
  guardianIdentifierType?: IdentifierType;
  patientCategory?: string;
  status?: AccountStatus;
  createdAt: Date;
}