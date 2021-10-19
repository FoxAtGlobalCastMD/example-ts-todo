import { FC } from "react";
import styled from "styled-components";

interface TodoInputProps {
  value: string;
  handleInput: Function;
  handleOnEnter: Function;
  handleOnEscape: Function;
}

const Input: FC<TodoInputProps> = ({
  value,
  handleInput,
  handleOnEnter,
  handleOnEscape,
}) => {
  return (
    <BasicInput
      type="text"
      placeholder="Add new item"
      value={value}
      onChange={(event) => {
        handleInput(event);
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          console.log("Enter was pressed");
          handleOnEnter(event);
        } else if (event.key === "Escape") {
          console.log("Escape was pressed");
          handleOnEscape();
        }
      }}
    />
  );
};

const BasicInput = styled.input`
  width: -webkit-fill-available;
  border: none;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  padding: 14px;
  font-size: 16px;
  margin-top: 16px;
`;

interface CheckBoxInputProps {
  handleOnChange: () => void;
  checked: boolean;
}

const CheckBoxInput: FC<CheckBoxInputProps> = ({
  handleOnChange,
  checked,
}): JSX.Element => {
  return (
    <StyledCheckBox
      type="checkbox"
      checked={checked}
      onChange={handleOnChange}
    />
  );
};

const StyledCheckBox = styled.input`
  margin-right: 8px;
`;

export default Input;
export { CheckBoxInput };
