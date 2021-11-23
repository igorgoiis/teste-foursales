import styled, { css } from "styled-components";
import { Link } from 'react-router-dom'

interface CurrentPage {
  isActive: boolean;
}

export const Content = styled.div`
  display: flex;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem ;
`;

export const Page = styled.span<CurrentPage>`
  font-size: 1rem;
  color: var(--blue-light);
  //margin-right: .9rem;
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