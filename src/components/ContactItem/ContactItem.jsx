import PropTypes from 'prop-types';
import { DataConteiner } from './ContactItem.styled';

export default function ContactItem({
  contact: { id, name, number },
  onDelete,
}) {
  return (
    <>
      <DataConteiner>
        <p>{name}:</p>
        <p>{number}</p>
      </DataConteiner>
      <button onClick={() => onDelete(id)}>Delete</button>
    </>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func,
};
