import { css } from "styled-components";

export const Theme = css`
  html[theme="dark"] {
    --color-dark: #1b1b1d;
  }
  html[theme="light"] {
    --color-dark: #ffffff;
  }
`;
