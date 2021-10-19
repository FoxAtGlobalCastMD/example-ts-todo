import { FC } from "react";
import styled from "styled-components";
import { CheckBoxInput } from "./Input";

export type ItemType = {
  id: string;
  title: string;
  complete: boolean;
  display?: boolean;
  editing?: boolean;
};

export interface ItemProps {
  item: ItemType;
  handleCheckBox: Function;
}

// This is still a functional component.
// We are able to type things out better with TS using const
const Item: FC<ItemProps> = ({ item, handleCheckBox }): JSX.Element => {
  return (
    <>
      {item.display && (
        <StyledItem>
          <CheckBoxInput
            checked={item.complete ? true : false}
            handleOnChange={() => {
              console.log("onchange!");
              handleCheckBox(item);
            }}
          />
          <ListItem complete={item.complete}>{item.title}</ListItem>
        </StyledItem>
      )}
    </>
  );
};

export default Item;

const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: -webkit-fill-available;
  border: #f3f4f6 solid 1px;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 8px;
`;

type ListItemType = {
  complete?: boolean;
};

const ListItem = styled.p`
  display: 100%;
  font-size: 18px;
  margin-right: 24px;
  text-decoration: ${(props: ListItemType) =>
    props.complete ? "line-through" : "none"};
`;
