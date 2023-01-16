import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in.component';
import './authentification.styles.scss';
const Authentication = () => {
  return (
    <div className='authentification-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
