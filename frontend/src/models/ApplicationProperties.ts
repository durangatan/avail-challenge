export type FormType = 'Full' | 'Basic';

type ApplicationPropertiesArgs = {
  formType: FormType;
  themeColorHex: string;
};

export class ApplicationProperties {
  formType: FormType;
  themeColorHex: string;
  constructor(args: ApplicationPropertiesArgs) {
    this.formType = args.formType;
    this.themeColorHex = args.themeColorHex;
  }

  static fromJSON(json: ApplicationPropertiesJSON) {
    const args: ApplicationPropertiesArgs = {
      formType: json.form_type,
      themeColorHex: json.theme_color_hex
    };
    return new ApplicationProperties(args);
  }
}

export type ApplicationPropertiesJSON = {
  form_type: FormType;
  theme_color_hex: string;
};
