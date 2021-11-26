import styled, { css } from "styled-components";


interface CurrentPage {
  isActive: boolean;
}

export const Container = styled.div`
  position: fixed;
  width: 100%;
  top: 100px;
  left: 0;
  background-color: var(--background);
  z-index: 1;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem ;

  div {
    display: flex;
  }
`;

export const ButtonAddTask = styled.button`
  display: flex;
  align-items: center;
  column-gap: 8px;
  margin: .7rem .9rem .7rem 0;
  padding: .3rem 1rem;
  background-color: var(--blue-light);
  font-size: 1rem;
  color: var(--shape);
  text-decoration: none;
  border: 1px solid var(--blue-light);
  border-radius: 20px;
  transition: all ease .2s;

  &:hover {
    filter: brightness(.9);
  }
`;

export const Page = styled.span<CurrentPage>`
  font-size: 1rem;
  color: var(--blue-light);
  margin: .7rem .9rem .7rem 0;
  padding: .3rem .9rem;
  border: 1px solid var(--blue-light);
  border-radius: 20px;
  text-decoration: none;
  transition: all ease .2s;

  ${props => props.isActive && css`
    background-color: var(--blue-light);
    color: var(--shape);
  `}

  &:hover {
    background-color: var(--blue-light);
    color: var(--shape);
    cursor: pointer;
  }
`;