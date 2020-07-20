import React, {useContext, Fragment, useEffect} from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import ContactContext from '../../context/contact/contactContext';
import ContactItem from "./ContactItem";
import Spiner from "../layout/Spiner";


const Contacts = () => {

    const contactContext = useContext(ContactContext);
    const {contacts, filtered,getContact,loading} = contactContext;

    useEffect(() => {
        getContact();
        // eslint-disable-next-line
    },[]);

    if (contacts !== null && contacts.length === 0 && !loading){
        return <h4>Please Add A Contact</h4>
    }


    return (
        <Fragment>
            {contacts !== null && !loading ? (
                <TransitionGroup>
                    {filtered !== null ? filtered.map(contact =>(
                            <CSSTransition key={contact._id} timeout={500} classNames="item">
                                <ContactItem  contact={contact}></ContactItem>
                            </CSSTransition>
                        ))
                        :contacts.map(contact =>(
                            <CSSTransition key={contact._id} timeout={500} classNames="item">
                                <ContactItem contact={contact}></ContactItem>
                            </CSSTransition>
                        ))}

                </TransitionGroup>
            ) : <Spiner></Spiner>}

        </Fragment>
    );
};

export default Contacts;