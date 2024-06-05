// src/components/StyledComponents.ts

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const FormContainer = styled.div`
  background: white;
  padding: 3rem;
  margin-top: 100rem;
  border-radius: 100px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 2000; /* Increase the width */
  max-width: 10000px; /* Limit the maximum width */
`;

export const Title = styled.h1`
  font-size: 10rem; /* Increase the font size */
  color: ${props => props.theme.colors.dark};
  margin-bottom: 3rem; /* Increase the margin */
  font-family: ${props => props.theme.fonts.secondary};
`;

export const Subtitle = styled.h2`
  font-size: 4rem; /* Increase the font size */
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 3rem; /* Increase the margin */
  font-family: ${props => props.theme.fonts.primary};
`;

export const FormGroup = styled.div`
  margin-bottom: 2rem; /* Increase the margin */
`;

export const Label = styled.label`
  display: block;
  font-size: 1.1rem; /* Increase the font size */
  color: ${props => props.theme.colors.dark};
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem; /* Increase the padding */
  font-size: 1rem;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 5px;
  outline: none;
  font-size: 1.1rem; /* Increase the font size */

  &:focus {
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
`;

export const RadioInput = styled.input`
  margin-right: 0.5rem;
`;

export const ErrorMessage = styled.p`
  color: ${props => props.theme.colors.danger};
  font-size: 1rem; /* Increase the font size */
  margin-top: 0.5rem;
  position : absolute;
`;

export const Button = styled.button`
  width: 100%;
  padding: 1rem; /* Increase the padding */
  font-size: 1.1rem; /* Increase the font size */
  color: white;
  background-color: ${props => props.theme.colors.primary};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.dark};
  }
`;
