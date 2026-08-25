import css from './ErrorMessage.module.css';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
   <p>Could not fetch the list of notes. {message}</p>

  );
}

export default  ErrorMessage