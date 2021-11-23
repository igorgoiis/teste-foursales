import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  background: var(--blue);
`;

export const Title = styled.h1`
  color: var(--background);
`;