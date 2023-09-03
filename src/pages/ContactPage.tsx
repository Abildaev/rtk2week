import React, {useEffect} from 'react';
import {Col, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {ContactCard} from 'src/components/ContactCard';
import {Empty} from 'src/components/Empty';
import {useAppDispatch, useAppSelector} from "src/ducks/hooks";
import {getOneContact} from "src/ducks/contacts";


export const ContactPage = () => {
  const {contactId} = useParams<{ contactId: string }>();
  const dispatch = useAppDispatch()
  const {oneContact} = useAppSelector(store => store.contacts)

  useEffect(() => {
    if(contactId) {
       dispatch(getOneContact({contactId}))
    }
  }, [contactId]);

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        {oneContact ? <ContactCard contact={oneContact} /> : <Empty />}
      </Col>
    </Row>
  );
};
