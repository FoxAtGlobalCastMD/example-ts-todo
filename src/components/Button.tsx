import { FC, MouseEventHandler } from "react";
import styled from "styled-components";

interface ButtonProps {
  action: MouseEventHandler<HTMLButtonElement>;
}
// we need an action
// first action idea is to clear all completed

const Button: FC<ButtonProps> = ({ action, children }): JSX.Element => {
  return (
    <BasicButton type="button" onClick={action}>
      {children}
    </BasicButton>
  );
};

const BasicButton = styled.button`
  color: #6b7280;
  font-size: 14px;
  background: white;
  border: 1px solid lightgray;
  padding: 6px;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    border: 1px solid lightgray;
  }
`;

export default Button;
