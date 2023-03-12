export default function ContactsFilter({ onInputFilter }) {
  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" onChange={onInputFilter} />
    </label>
  );
}
