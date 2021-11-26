import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  background: var(--blue);

  span {
    font-size: .9rem;
    color: var(--background);
  }

  a {
    font-size: .9rem;
    color: var(--background);
    text-decoration: none;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 1px;
      background-color: var(--background);
      transition: width ease-in-out .2s;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;