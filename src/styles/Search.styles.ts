import styled from "styled-components";

export const SearchContainer = styled.div`
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;

  input {
    width: 250px;
    padding: 0.4rem;
    border: 1px solid rgba(255, 255, 255, 0.25);
    background: transparent;
    outline: none;
    color: #fff;
    font-size: 1rem;
    transition: 0.1s;

    &:focus {
      border-color: var(--orange);
    }

    @media (max-width: 440px) {
      width: 100%;
    }
  }
`;
