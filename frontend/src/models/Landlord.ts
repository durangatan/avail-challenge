export type LandlordArguments = {
  email: string;
  name: string;
  id?: number;
};

export class Landlord {
  email: string;
  name: string;
  id?: number;
  constructor(args: LandlordArguments) {
    this.email = args.email;
    this.name = args.name;
    this.id = args.id;
  }

  toJSON(): LandlordJSON {
    const { name, id, email } = this;
    return {
      name,
      email,
      id
    };
  }
}

export type LandlordJSON = {
  id?: number;
  email: string;
  name: string;
};
