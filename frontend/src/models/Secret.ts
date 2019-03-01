export type SecretArguments = {
  ssn: string;
  mmn: string;
  applicantId?: number;
};

export class Secret {
  ssn: string;
  mmn: string;
  applicantId?: number;

  constructor(args: SecretArguments) {
    this.ssn = args.ssn;
    this.mmn = args.mmn;
    this.applicantId = args.applicantId;
  }

  static fromJSON(json: SecretJSON) {
    const args = {
      ssn: json.ssn,
      mmn: json.mmn,
      applicantId: json.applicant_id
    };
    return new Secret(args);
  }
}

type SecretJSON = {
  ssn: string;
  mmn: string;
  applicant_id: number;
};
