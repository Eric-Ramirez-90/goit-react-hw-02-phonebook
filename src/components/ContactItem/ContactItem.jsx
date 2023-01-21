import PropTypes from 'prop-types';

export default function ContactItem({ contact: { name, number } }) {
  return (
    <>
      <p>{name} :</p>
      <p>{number}</p>
    </>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
