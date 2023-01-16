import { useState } from 'react';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import './sign-in.styles.scss';
const defaultFormFields = {
  email: '',
  password: '',
};
const SignInForm = (props) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        alert('This user does not exist');
      }
      if (error.code === 'auth/wrong-password') {
        alert('incorrect password');
      }
      console.log(error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          name='email'
          required
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          name='password'
          required
          onChange={handleChange}
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit'>sign-in</Button>
          <Button
            type='button'
            buttonType='google'
            onClick={signInWithGooglePopup}
          >
            GOOGLE Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
