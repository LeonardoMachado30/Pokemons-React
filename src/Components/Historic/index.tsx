import { useState, useContext } from "react";

import styled from "styled-components";

import HistoryIcon from "@mui/icons-material/History";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

import { CompareContext } from "../index";

function Historic() {
  const [state, setState] = useState(false);
  const [list, setList] = useState();
  const { compare } = useContext(CompareContext);

  return (
    <>
      <Button
        onClick={() => {
          state ? setState(false) : setState(true);
        }}
      >
        {state ? <ArrowDownwardIcon /> : <HistoryIcon />}
      </Button>
      {state && (
        <List>
          <Item>
            <div>historico</div>
            <CompareArrowsIcon />
            <div>historico</div>
          </Item>
          <Item>
            <div>historico</div>
            <CompareArrowsIcon />
            <div>historico</div>
          </Item>
        </List>
      )}
    </>
  );
}

const List = styled.ul`
  position: fixed;
  bottom: 50px;
  left: 30px;
  right: 0;
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 2;
  padding: 0;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 4px;
  transform: translateY(-10px);
  transition: transform 1s ease-in-out;

  > svg:hover {
    color: var(--color-primary);
    cursor: pointer;
  }
`;

const Button = styled.button`
  position: fixed;
  bottom: 30px;
  left: 30px;
  right: 0;
  width: 100%;
  max-width: 50px;
  display: flex;
  justify-content: center;
  align-content: center;
  z-index: 3;
  background-color: var(--color-primary);
  box-shadow: 0px -8px 15px 7px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: none;
  cursor: pointer;

  > svg {
    color: #fff;
  }
`;

export default Historic;
