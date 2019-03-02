import React from 'react';
import { Button } from '../../../elements';

export default function ConfirmSubmissionModal({
  onCancel,
  onSubmit
}: {
  onCancel: (e: React.MouseEvent<HTMLElement>) => void;
  onSubmit: (e: React.MouseEvent<HTMLElement>) => void;
}) {
  return (
    <React.Fragment>
      <h1>Confirm Submission 📨</h1>
      <p>Are you sure you want to submit your application? You won't be able to edit it after this point.</p>
      <Button text="Cancel" buttonType="default" onClick={onCancel} />
      <Button text="Submit" buttonType="action" onClick={onSubmit} />
    </React.Fragment>
  );
}
