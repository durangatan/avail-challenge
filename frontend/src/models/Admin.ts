export type AdminArguments = {
	email: string;
	password?: string;
};

export default class Admin {
	email: string;
	password?: string;
	constructor(args: AdminArguments) {
		this.email = args.email;
		this.password = args.password;
	}
}
