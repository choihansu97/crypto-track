import styled from "styled-components";
import {useTheme} from "../../context/themeContext";
import DarkModeToggle from "../darkModeToggle";

export default function Header() {
    const [ThemeMode, toggleTheme] = useTheme();

    return (
        <Wrapper>
            <DarkModeToggle toggle={toggleTheme} mode={ThemeMode}>
                다크모드
            </DarkModeToggle>
        </Wrapper>
    )
}

const Wrapper = styled.header `
    display: flex;
`;