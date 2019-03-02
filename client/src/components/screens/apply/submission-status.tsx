import React from 'react';

export default function SubmissionStatus({ submitted }: { submitted: boolean }) {
  return (
    <p>
      {submitted
        ? 'Your application has been submitted for review. You can no longer edit it.'
        : 'Your application has not been submitted. Your new landlord will not be able to view your application until you submit.'}
    </p>
  );
}
