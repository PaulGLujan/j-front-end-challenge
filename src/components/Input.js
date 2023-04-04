import React from "react";
import styled from "styled-components";

const TEXT = "text";
const PASSWORD = "password";

export const INPUT_TYPES = {
  TEXT,
  PASSWORD,
};

const Container = styled.div`
  width: 400px;
  display: block;
  margin: 24px 0;
`;

const Error = styled.p`
  font-size: 12px;
  color: red;
`;

const StyledInput = styled.input`
  font-size: 14px;
  width: 100%;
  padding: 8px 0;
  border: none;
  border-bottom: 1px solid #3a4354;
  &:focus {
    outline: none;
    border-bottom: 1px solid #ffba05;
  }
`;

export const Input = ({
  value,
  placeholder,
  error,
  onChange,
  disabled,
  hasError = false,
  autoFocus = false,
  type = INPUT_TYPES.TEXT,
  ...rest
}) => {
  return (
    <Container>
      <StyledInput
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        error={error}
        autoFocus={autoFocus}
        {...rest}
      />
      {hasError && <Error>{error}</Error>}
    </Container>
  );
};
