import { useState } from 'react';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import {
  createAuuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import './sign-up-form.styles.scss';
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const SignUpForm = (props) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }
    try {
      const { user } = await createAuuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('email already used');
      }
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          name='displayName'
          required
          onChange={handleChange}
          value={displayName}
        />

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

        <FormInput
          label='Confirm Password'
          type='password'
          name='confirmPassword'
          required
          onChange={handleChange}
          value={confirmPassword}
        />
        <Button type='submit'>sign-up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
