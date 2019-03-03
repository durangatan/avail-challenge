import React from 'react';
import { Button } from '../../../elements';

export default function DeleteApplicationModal({
  onCancel,
  onSubmit
}: {
  onCancel: (e: React.MouseEvent<HTMLElement>) => void;
  onSubmit: (e: React.MouseEvent<HTMLElement>) => void;
}) {
  return (
    <React.Fragment>
      <h1>Confirm Delete ⚠️</h1>
      <p>Are you sure you want to delete your application? </p>
      <Button text="Cancel" buttonType="default" onClick={onCancel} />
      <Button text="Delete" buttonType="error" onClick={onSubmit} />
    </React.Fragment>
  );
}
