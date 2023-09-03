import {memo} from 'react';
import {Col, Row} from 'react-bootstrap';
import {GroupContactsCard} from 'src/components/GroupContactsCard';
import {useAppSelector} from 'src/ducks/hooks';

export const GroupListPage = memo(() => {

  const {allContactsGroup} = useAppSelector(store => store.groupContacts)

  return (
    <Row xxl={4}>
      {allContactsGroup.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  )
})
