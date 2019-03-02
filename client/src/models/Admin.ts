export type AdminArguments = {
  id?: number;
  email: string;
  password?: string;
  token?: string;
};

export class Admin {
  email: string;
  password?: string;
  _token?: string;
  id?: number;
  constructor(args: AdminArguments) {
    this.email = args.email;
    this.password = args.password;
    this._token = args.token;
    this.id = args.id;
  }
}
