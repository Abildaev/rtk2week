import React, {memo} from 'react';
import {Col, Row} from 'react-bootstrap';
import {ContactCard} from 'src/components/ContactCard';
import {FilterForm, FilterFormValues} from 'src/components/FilterForm';

import {useAppDispatch, useAppSelector} from "src/ducks/hooks";
import {findContacts} from "src/ducks/contacts";


export const ContactListPage = memo(() => {
    const {contacts} = useAppSelector(store => store.contacts)
    const {allContactsGroup} = useAppSelector(store => store.groupContacts)
    const dispatch = useAppDispatch()

    const onSubmit = (fv: Partial<FilterFormValues>) => {
        if (fv) {
            dispatch(findContacts(fv))
        }
    }

    return (
        <Row xxl={1}>
            <Col className="mb-3">
                <FilterForm groupContactsList={allContactsGroup} initialValues={{}} onSubmit={onSubmit}/>
            </Col>
            <Col>
                <Row xxl={4} className="g-4">
                    {contacts.map((contact) => (
                        <Col key={contact.id}>
                            <ContactCard contact={contact} withLink/>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    );
})
