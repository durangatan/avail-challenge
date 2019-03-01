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
  WithApplicantId
} from '../../../models';
import { SubmissionStatus } from './';
import { getApplicant, saveApplicant, submitApplication } from '../../../api';
import { BasicFormQuestions, SecretFormQuestions, LandlordFormQuestions } from './forms';
import { ConfirmSubmissionModal } from './modals';
import { FormTag, CanError } from '../../elements/form';
import { ButtonContainer, Button } from '../../elements/button';
import renderIf from '../../util/RenderIf';
import { validateEmail, validateSSN } from '../../util/validators';

type ApplyScreenProps = {
  toggleModal: (modalShouldOpen: boolean, modalChildren: ReactNode) => void;
  formType: FormType;
} & RouteComponentProps<WithApplicantId>;

export default function Apply(props: ApplyScreenProps) {
  const [applicant, setApplicant] = useState<ApplicantArguments & CanError>({ name: '', email: '' });
  const [landlord, setLandlord] = useState<LandlordArguments & CanError>({ name: '', email: '' });
  const [secret, setSecret] = useState<SecretArguments & CanError>({ ssn: '', mmn: '', applicantId: applicant.id });
  useEffect(() => {
    getApplicant(Number(props.match.params.id)).then((applicant: Applicant) => {
      setApplicant(applicant);
    });
  }, []);

  const save = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    // validate presence of name and email
    const emailError = validateEmail()(applicant.email);
    if (emailError) {
      return Promise.reject(setApplicant({ ...applicant, error: emailError }));
    }
    const landlordError = validateEmail()(landlord.email);
    if (landlordError) {
      return Promise.reject(setLandlord({ ...landlord, error: landlordError }));
    }

    return saveApplicant(new Applicant(applicant));
  };

  const submit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log('submitting...', applicant, secret);
    const emailError = validateEmail()(applicant.email);
    if (emailError) {
      return Promise.reject(setApplicant({ ...applicant, error: emailError }));
    }
    const landlordError = validateEmail()(landlord.email);
    if (landlordError) {
      return Promise.reject(setLandlord({ ...landlord, error: landlordError }));
    }
    if (props.formType === 'Full') {
      const secretError = validateSSN()(secret.ssn);
      if (secretError) {
        return Promise.reject(setSecret({ ...secret, error: secretError }));
      }
    }
    return submitApplication(new Applicant({ ...applicant, landlord, secret }));
    // if there are no errors, save the form.
    // if something happens with the save, return to this form with an error that the save failed.
    // if the save is successful, redirect to the success page.
  };

  const toggleConfirmationModal = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    console.log('You want to submit', applicant, secret);
    props.toggleModal(
      true,
      <ConfirmSubmissionModal onCancel={() => props.toggleModal(false, null)} onSubmit={submit} />
    );
  };

  return (
    <Main>
      <h1>Your Application 📥</h1>
      <SubmissionStatus submitted={Boolean(applicant.submitted)} />
      <FormTag>
        <BasicFormQuestions
          applicant={applicant}
          onChange={(updates: any) => {
            console.log(updates);
            setApplicant(updates);
          }}
          error={applicant.error}
        />
        <LandlordFormQuestions
          landlord={landlord}
          onChange={(updates: any) => {
            setLandlord(updates);
          }}
          error={landlord.error}
        />
        {renderIf(
          props.formType === 'Full',
          <SecretFormQuestions secret={secret} onChange={setSecret} error={secret.error} />
        )}
        <ButtonContainer>
          <Button buttonType="action" text="Save" onClick={save} />
          <Button buttonType="success" text="Submit" onClick={toggleConfirmationModal} />
        </ButtonContainer>
      </FormTag>
    </Main>
  );
}
