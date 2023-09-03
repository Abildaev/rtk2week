import React, {memo, useEffect} from 'react';
import {Col, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {GroupContactsCard} from 'src/components/GroupContactsCard';
import {Empty} from 'src/components/Empty';
import {ContactCard} from 'src/components/ContactCard';
import {useAppDispatch, useAppSelector} from "src/ducks/hooks";
import {getOneGroup} from "src/ducks/groupContacts";

export const GroupPage = memo(() => {
  const {groupId} = useParams<{ groupId: string }>();
  const {oneContactGroup,contacts} = useAppSelector(store => store.groupContacts)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if(groupId){
      dispatch(getOneGroup({groupId}))
    }
  }, [groupId]);

  return (
    <Row className="g-4">
      {oneContactGroup ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                <GroupContactsCard groupContacts={oneContactGroup} />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xxl={4} className="g-4">
              {contacts.map((contact) => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
              ))}
            </Row>
          </Col>
        </>
      ) : <Empty />}
    </Row>
  );
});
