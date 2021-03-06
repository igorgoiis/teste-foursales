import styled from "styled-components";

export const Content = styled.div`
  max-width: 1120px;
  padding: 0 1rem ;
  margin: 180px auto 80px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 30px;

  span {
    color: var(--text-body);
  }
`;