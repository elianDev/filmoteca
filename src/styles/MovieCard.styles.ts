import styled from "styled-components";

export const MovieCardContainer = styled.section`
  height: 425px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  background: var(--bg-secundary);
  color: var(--text-color-01);
  position: relative;
  box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.8);
  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  img {
    margin-bottom: 1rem;
    height: 300px;
    width: 100%;
    object-fit: cover;
  }

  .content {
    padding: 0 0.5rem;

    h2 {
      font-size: 1.2rem;
    }

    .content-score {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      position: absolute;
      bottom: 0.5rem;
      left: 0.5rem;
    }
  }
`;
