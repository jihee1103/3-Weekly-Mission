import AnchorButton from '@components/ui/atoms/button/anchor-btn/AnchorButton';

const LoginButton = ({ children }) => {
  console.log('button rendering');

  return (
    <AnchorButton rel='nofollow' width='short' href='/src/pages/auth/signin/'>
      {children}
    </AnchorButton>
  );
};

export default LoginButton;
