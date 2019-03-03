export type FormType = 'Full' | 'Basic';

type ApplicationPropertiesArgs = {
  id?: number;
  formType: FormType;
  themeColorHex: string;
};

export class ApplicationProperties {
  id?: number;
  formType: FormType;
  themeColorHex: string;
  constructor(args: ApplicationPropertiesArgs) {
    this.id = args.id;
    this.formType = args.formType;
    this.themeColorHex = args.themeColorHex;
  }

  static fromJSON(json: ApplicationPropertiesJSON) {
    const args: ApplicationPropertiesArgs = {
      id: json.id,
      formType: json.form_type,
      themeColorHex: json.theme_color_hex
    };
    return new ApplicationProperties(args);
  }
  toJSON() {
    return {
      id: this.id,
      form_type: this.formType,
      theme_color_hex: this.themeColorHex
    };
  }
}

export type ApplicationPropertiesJSON = {
  id: number;
  form_type: FormType;
  theme_color_hex: string;
};
