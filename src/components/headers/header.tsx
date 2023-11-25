import styled from "styled-components";
import {useTheme} from "../../context/themeContext";
import DarkModeToggle from "../darkModeToggle";
import {Link} from 'react-router-dom';

export default function Header() {
    const [ThemeMode, toggleTheme] = useTheme();

    return (
        <Wrapper>
            <Logo><Link to={"/"}>CryptoTracker</Link></Logo>
            <DarkModeToggle toggle={toggleTheme} mode={ThemeMode}>
                다크모드
            </DarkModeToggle>
        </Wrapper>
    )
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #dadada;
`;

const Logo = styled.h2`
  font-size: 2rem;
  font-weight: bold;

  a {
    color: cornflowerblue;
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }
  }
`;