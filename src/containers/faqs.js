import React from 'react';
import * as ROUTES from '../constants/routes';
import { Accordion } from '../components';
import OptForm from '../components/opt-form';
import faqsData from '../fixtures/faqs.json';

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title style={{ fontFamily: "Century Gothic" }}>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <Accordion.Item />

      <OptForm>
        <OptForm.Button to={ROUTES.SIGN_UP}>Sign Up Now</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>Ready to jump into the action? Sign up to create or restart your membership.</OptForm.Text>
      </OptForm>
    </Accordion>
  );
}