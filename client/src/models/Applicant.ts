import { Landlord, LandlordJSON, LandlordArguments, Secret, SecretArguments, SecretJSON } from './';
import { formatDate } from '../components/util';
export type ApplicantArguments = {
  email: string;
  name: string;
  dob?: string;
  employmentStatus?: EmploymentStatus;
  hasPets?: boolean;
  landlordId?: number;
  landlord?: LandlordArguments;
  secretId?: number;
  secret?: SecretArguments;
  submitted?: boolean;
  id?: number;
  createdAt?: string;
  updatedAt?: string;
  token?: string;
};

export type EmploymentStatus = 'Employed' | 'Unemployed';

export class Applicant {
  id?: number;
  email: string;
  name: string;
  dob?: string;
  employmentStatus?: EmploymentStatus;
  hasPets: boolean;
  submitted: boolean;
  token?: string;

  landlordId?: number;
  landlord?: Landlord;

  secretId?: number;
  secret?: Secret;

  constructor(args: ApplicantArguments) {
    this.id = args.id;
    this.email = args.email;
    this.name = args.name;
    this.dob = args.dob;
    this.employmentStatus = args.employmentStatus;
    this.hasPets = args.hasPets || false;
    this.landlordId = args.landlordId;
    this.landlord = args.landlord ? new Landlord(args.landlord) : undefined;
    this.secretId = args.secretId;
    this.secret = args.secret ? new Secret(args.secret) : undefined;
    this.submitted = args.submitted || false;
    this.token = args.token;
  }

  getValues() {
    return [
      this.name,
      this.email,
      this.dob,
      this.employmentStatus,
      this.hasPets ? '✅' : '',
      this.landlord ? this.landlord.name : '',
      this.landlord ? this.landlord.email : ''
    ];
  }

  static fromJSON(json: ApplicantJSON) {
    const args: ApplicantArguments = {
      id: json.id,
      email: json.email,
      name: json.name,
      dob: json.dob ? formatDate(json.dob) : undefined,
      employmentStatus: json.employment_status || 'Unemployed',
      hasPets: json.has_pets || undefined,
      landlordId: json.landlord_id || undefined,
      landlord: json.landlord ? new Landlord(json.landlord) : undefined,
      submitted: json.submitted || undefined,
      token: json.token || undefined
    };
    return new Applicant(args);
  }

  toJSON(): ApplicantJSON {
    return {
      id: this.id,
      email: this.email,
      name: this.name,
      dob: this.dob ? new Date(this.dob).getTime() : null,
      employment_status: this.employmentStatus || null,
      has_pets: this.hasPets,
      landlord: this.landlord ? this.landlord.toJSON() : null,
      landlord_id: this.landlordId || null,
      secret: this.secret ? this.secret.toJSON() : null,
      secret_id: this.secretId || null,
      token: this.token || null,
      submitted: this.submitted
    };
  }
}

export type ApplicantJSON = {
  id?: number;
  email: string;
  name: string;
  dob: number | null;
  employment_status: EmploymentStatus | null;
  has_pets: boolean | null;
  landlord: LandlordJSON | null;
  landlord_id: number | null;
  token: string | null;
  submitted: boolean | null;
  secret: SecretJSON | null;
  secret_id: number | null;
};

export type WithApplicantId = {
  id: string;
};
