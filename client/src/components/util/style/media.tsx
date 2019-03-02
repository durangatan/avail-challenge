import { css } from 'styled-components';

export default {
  largeUp: (args: TemplateStringsArray) => css`
    @media only screen and (min-width: 53.126em) {
      ${css(args)}
    }
  `
};
