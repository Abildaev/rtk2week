import React, {memo, useEffect} from 'react';
import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/components/ContactCard';
import {useAppDispatch, useAppSelector} from "src/ducks/hooks";
import {getFavoriteContacts} from "src/ducks/favoriteContacts";

export const FavoritListPage = memo(() => {
  const dispatch  = useAppDispatch()
  const {allContacts} = useAppSelector(store => store.contacts)
  const {contacts, favoriteContacts} = useAppSelector(store => store.favoriteContacts)

  useEffect(() => {
        dispatch(getFavoriteContacts())
  }, [allContacts, favoriteContacts])
  return (
    <Row xxl={4} className="g-4">
      {contacts.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
})
