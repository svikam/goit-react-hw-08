import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "..//../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";

const ContactList = () => {
    const dispatch = useDispatch();
    const filteredContacts = useSelector(selectFilteredContacts);
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    return (
        <ul className={s.list}>
            {filteredContacts.map(contact => (
                <li key={contact.id} className={s.card}>
                    <Contact
                        id={contact.id}
                        name={contact.name}
                        number={contact.number}
                    />
                </li>
            ))}
        </ul> 
    );
};

export default ContactList;