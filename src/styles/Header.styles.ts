import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: var(--bg-header);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;

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
