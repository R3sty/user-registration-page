import React, { useState } from 'react';
import styled from 'styled-components';

interface FormProps {
  onSubmit: (formData: { email: string, password: string }) => void;
  isLoginForm?: boolean;
}

interface InputProps {
  hasError?: boolean;
}

const FormContainer = styled.form`
color: green
display: flex;
flex-direction: column;
align-items: center;
margin-top: 50px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Input = styled.input<InputProps>`
  padding: 10px;
  border: 1px solid ${({ hasError }) => hasError ? 'red' : 'gray'};
  border-radius: 5px;
  margin-bottom: 20px;
  width: 300px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: blue;
  color: white;
  cursor: pointer;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const Form: React.FC<FormProps> = ({ onSubmit, isLoginForm = true }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
      setHasError(true);
      setErrorMessage('Please fill in all fields.');
    } else {
      onSubmit({ email, password });
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>{isLoginForm ? 'Login' : 'Sign up'}</Title>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        hasError={hasError}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        hasError={hasError}
      />
      {hasError && <ErrorMessage>{errorMessage}</ErrorMessage>}
      <Button type="submit">{isLoginForm ? 'Login' : 'Sign up'}</Button>
    </FormContainer>
  );
};

export default Form;
