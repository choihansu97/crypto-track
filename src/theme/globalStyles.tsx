import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    body {
        background: ${({theme}) => theme.backgroundColor};
        color: ${({theme}) => theme.textColor};
    }

    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyles;