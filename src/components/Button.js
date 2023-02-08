import styled from "styled-components";

export const Button = styled.button`
  text-align: center;
  background-color: #3a4354;
  padding: 10px 0;
  max-width: 400px;
  width: 100%;
  color: #ffffff;
  font-family: "poppins-bold";
  text-transform: uppercase;
  cursor: pointer;
  ${(props) => {
    if (props.loading) {
      return `
        background-color: #252b36; 
        cursor: wait;
      `;
    } else if (props.success) {
      return `
        color: #394152;
        background-color: #ffffff;
        border: solid #3a4354;
        cursor: auto;
      `;
    }
  }};
`;
