import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --red: #e52e4d;
    --blue: #2356AD;

    --blue-light: #5E80BB;
    
    --text-title: #363f5f;
    --text-body: #969cb3;

    --background: #f0f2f5;
    --shape: #ffffff;
    --border: #dedede;
    --shadow: #dddddd;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    &:focus, &:focus-visible {
      outline: none;
    }
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  ul {
    list-style: none;
  }
  
  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: .6;
    cursor: not-allowed;
  }

  .react-modal-overlay{
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 1;

  background-color: rgba(0, 0, 0, 0.5);
}

.react-modal-content {
  width: 100%;
  max-width: 576px;
  background-color: var(--background);
  padding: 3rem;
  position: relative;
  border-radius: .25rem;
}

.react-modal-close {
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background-color: transparent;
  transform: rotate(45deg);
  font-size: 1.5rem;
  color: var(--text-body);
  transition: filter .2s;
        
  &:hover {
      filter: brightness(.8);
  }
}
`;