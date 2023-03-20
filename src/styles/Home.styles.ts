import styled from "styled-components";

export const HomeContainer = styled.article`
  background: var(--bg-primary);

  .container {
    padding-top: 3rem;
    padding-bottom: 3rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;

    @media (max-width: 800px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 400px) {
      grid-template-columns: 1fr;
    }
  }
`;
