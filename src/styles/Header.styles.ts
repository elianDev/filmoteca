import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: var(--bg-header);
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;

    nav {
      display: flex;
      gap: 0.5rem;

      a {
        color: var(--text-color-01);
        font-size: 1.125rem;
        padding: 0.5rem;
      }

      a.active {
        color: var(--active);
      }
    }
    img {
      height: 35px;
    }
  }
`;
