import Button from '../../../../../../../components/ui/button/Button';

const LoginButton = ({ children }) => {
  return (
    <Button width='short' href={'/src/pages/auth/signin/'}>
      {children}
    </Button>
  );
};
export default LoginButton;
