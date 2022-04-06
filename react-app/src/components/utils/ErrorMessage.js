export const ErrorMessage = ({ label, message }) => {
  return (
    <p className='error message'>
      {message ? (label ? `${label}: ` : '') + `${message}` : ''}
    </p>
  );
};
