import styled from "styled-components";

export const LoadingContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;

  span {
    width: 4rem;
    height: 4rem;
    background: transparent;
    display: block;
    border-radius: 50%;
    border: 0.5rem solid var(--active);
    border-top: 0.5rem solid transparent;
    animation: loading 1s linear infinite;
  }

  @keyframes loading {
    to {
      rotate: 360deg;
    }
  }
`;
