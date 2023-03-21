import styled from "styled-components";

export const MovieContainer = styled.section`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  color: var(--text-color-01);

  .content {
    h1 {
      font-size: 2rem;
    }

    .content-original-title {
      font-size: 0.8rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.125rem;
      margin-bottom: 1rem;
    }

    .content-rating {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    button {
      padding: 0.5rem 1rem;
      background: var(--orange);
      border: none;
      text-transform: uppercase;
      font-size: 1rem;
      font-weight: 700;
      color: white;
      box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.5);
      letter-spacing: 0.08em;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        background: var(--bg-secundary);
      }
    }
  }
`;
