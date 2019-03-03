import React, { useState, useEffect, ReactNode } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Main } from '../../page';
import {
  Applicant,
  Secret,
  ApplicantArguments,
  LandlordArguments,
  SecretArguments,
  FormType,
  WithApplicantId,
  Landlord
} from '../../../models';
import { SubmissionStatus } from './';
import { getApplicant, saveApplicant, createSecret, saveLandlord, getLandlord } from '../../../api';
import { BasicFormQuestions, SecretFormQuestions, LandlordFormQuestions } from './forms';
import { ConfirmSubmissionModal } from './modals';
import { FormTag, CanError } from '../../elements/form';
import { ButtonContainer, Button } from '../../elements/button';
import renderIf from '../../util/RenderIf';
import { validateEmail, validateSSN } from '../../util/validators';

type ApplyScreenProps = {
  toggleModal: (modalShouldOpen: boolean, modalChildren: ReactNode) => void;
  formType: FormType;
  setNotificationMessage: React.Dispatch<React.SetStateAction<string>>;
} & RouteComponentProps<WithApplicantId>;

export default function Apply(props: ApplyScreenProps) {
  const [applicant, setApplicant] = useState<ApplicantArguments & CanError>({ name: '', email: '' });
  const [landlord, setLandlord] = useState<LandlordArguments & CanError>({ name: '', email: '' });
  const [secret, setSecret] = useState<SecretArguments & CanError>({ ssn: '', mmn: '', applicantId: applicant.id });

  // get the saved state of this applicant's form
  useEffect(() => {
    getApplicant(Number(props.match.params.id)).then((applicant: Applicant) => {
      setApplicant(applicant);
      if (applicant.landlordId) {
        getLandlord(applicant.landlordId).then((landlord: Landlord) => {
          setLandlord(landlord);
        });
      }
    });
  }, []);

  useEffect(() => {}, []);

  // save the form without submitting. Validates the email fields for the applicant and landlord.
  const save = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    // validate presence of name and email
    const emailError = validateEmail()(applicant.email);
    if (emailError) {
      return setApplicant({ ...applicant, error: emailError });
    }
    if (landlord.email.length) {
      const landlordError = validateEmail()(landlord.email);
      if (landlordError) {
        return setLandlord({ ...landlord, error: landlordError });
      }
    }

    return saveApplicant(new Applicant({ ...applicant, landlordId: landlord.id }))
      .then(() => {
        if (landlord.email.length || landlord.name.length) {
          return saveLandlord(new Landlord(landlord));
        }
        return Promise.resolve();
      })
      .then(() => {
        props.setNotificationMessage('Application saved successfully.');
      });
  };

  // submits the form. You can't go back!
  const submit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const emailError = validateEmail()(applicant.email);
    if (emailError) {
      setApplicant({ ...applicant, error: emailError });
      props.toggleModal(false, null);

      return;
    }
    const landlordError = validateEmail()(landlord.email);
    if (landlordError) {
      setLandlord({ ...landlord, error: landlordError });
      props.toggleModal(false, null);
      return;
    }
    if (props.formType === 'Full') {
      const secretError = validateSSN()(secret.ssn);
      if (secretError) {
        setSecret({ ...secret, error: secretError });
        props.toggleModal(false, null);
        return;
      }
    }
    return saveApplicant(new Applicant(applicant))
      .then(() => {
        return createSecret(new Secret(secret));
      })
      .then(() => {
        return saveLandlord(new Landlord(landlord));
      })
      .then(() => {
        props.toggleModal(false, null);
        return props.history.push('/success', {
          message: "Application Submitted! We'll be in touch soon with next steps."
        });
      })
      .catch(e => {
        console.log(e);
        props.toggleModal(false, null);
      });
  };

  // toggles confirmation modal for submitting the application
  const toggleConfirmationModal = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    props.toggleModal(
      true,
      <ConfirmSubmissionModal onCancel={() => props.toggleModal(false, null)} onSubmit={submit} />
    );
  };
  const didError = applicant.error || landlord.error || secret.error;
  return (
    <Main>
      <h1>Your Application 📥</h1>
      <SubmissionStatus submitted={Boolean(applicant.submitted)} />
      <FormTag>
        <BasicFormQuestions applicant={applicant} onChange={setApplicant} error={applicant.error} />
        <LandlordFormQuestions landlord={landlord} onChange={setLandlord} error={landlord.error} />
        {renderIf(
          props.formType === 'Full',
          <SecretFormQuestions secret={secret} onChange={setSecret} error={secret.error} />
        )}
        <ButtonContainer>
          <Button buttonType="action" text="Save" onClick={save} />
          <Button buttonType={didError ? 'error' : 'success'} text="Submit" onClick={toggleConfirmationModal} />
        </ButtonContainer>
      </FormTag>
    </Main>
  );
}
