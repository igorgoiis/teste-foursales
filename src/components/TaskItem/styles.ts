import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  justify-content: center;
  border: 1px solid #dddddd;
  border-radius: 10px;
  padding: 1rem 2rem;
  box-shadow: 0px 0px 10px 5px #dddddd;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 85%;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-basis: 15%;
`;