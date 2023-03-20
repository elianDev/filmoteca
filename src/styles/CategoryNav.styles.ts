import styled from "styled-components";

export const NavCategoryContainer = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
  padding-top: 1rem;

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
  @media (max-width: 440px) {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }
`;
