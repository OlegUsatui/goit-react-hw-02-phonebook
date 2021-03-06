const ContactList = ({ contacts, onDeleteContacts}) => {
      return (
        <ul>{
          contacts.map(({ id, name, number }) => (
            <li key={id}>
              <p>{name}: {number}</p>
              <button type="button" onClick={() => { onDeleteContacts(id) }}>Delete</button>
            </li>
          ))
        }</ul>
      );
};
export default ContactList;