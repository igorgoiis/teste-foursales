import styled from "styled-components";
import { FiTrash2 } from "react-icons/fi";

export const Container = styled.li`
  display: flex;
  justify-content: center;
  border: 1px solid #dddddd;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 5px #dddddd;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 85%;
  padding: 1rem 2rem;

`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-basis: 15%;
  padding: 1rem 2rem;
`;

export const ButtonTrash = styled.button`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;

  &:hover {
    opacity: .8;
  }
`;

export const TrashIcon = styled(FiTrash2)`
  font-size: 25px;
  color: #000;
`;