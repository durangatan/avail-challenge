import React from 'react';
import { SecretArguments } from '../../../../models';
import { Input } from '../../../elements';
import formatSSN from '../../../util/formatSSN';
import { FormError } from '../../../elements/form';

export default function SecretFormQuestions({
  secret,
  error,
  onChange
}: {
  secret: SecretArguments;
  error?: string;
  onChange: (e: any) => void;
}) {
  return (
    <React.Fragment>
      <h2>Secret Info 🤫</h2>
      <p>
        We will need some sensitive indentification info from you to complete a background check. Don't worry - your
        secrets are safe with us. Note: for security reasons, you cannot save an incomplete form that contains secrets -
        you will have to submit the whole form.
      </p>
      <Input
        label="SSN:"
        name="ssn"
        type="text"
        placeholder="XXX-XX-XXXX"
        value={secret.ssn}
        onChange={e => onChange({ ...secret, ssn: formatSSN(e.currentTarget.value) })}
      />
      <Input
        label="Mother's Maiden Name:"
        name="mmn"
        type="text"
        placeholder="Jones"
        value={secret.mmn}
        onChange={e => onChange({ ...secret, mmn: e.currentTarget.value })}
      />
      {error ? <FormError message={error} /> : null}
    </React.Fragment>
  );
}
