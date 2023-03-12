export default function Contacts({ onRamoveContact, filtredCountries }) {
  return filtredCountries.map(contact => (
    <li key={contact.id}>
      <p>
        {contact.name}: {contact.number}
      </p>

      <button type="button" onClick={() => onRamoveContact(contact.id)}>
        Delete
      </button>
    </li>
  ));
}
