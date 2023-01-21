import styled from '@emotion/styled';

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  width: 350px;
  padding: 15px;
  margin-bottom: 20px;

  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;

  font-size: 20px;
  font-weight: 500;
`;

export const Input = styled.input`
  font-size: 18px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  :focus {
    outline: 2px solid lightblue;
  }
`;

export const Button = styled.button`
  margin: 0;
  padding: 2px 10px;

  font-size: 16px;

  background-color: white;

  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

  :hover,
  :focus {
    background-color: lightgreen;
  }
`;
