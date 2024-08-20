import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
    
const ContactsPage = () => {
    return (
        <div>
            <h2>Your Contacts</h2>
            <ContactForm />
            <SearchBox />
            <ContactList />
        </div>
    );
};

export default ContactsPage;