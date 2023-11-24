import styled from "styled-components";

export default function DarkModeToggle({ toggle, mode }) {
    return (
        <ToggleWrapper onClick={toggle} mode={mode}>
            {mode === 'dark' ? '🌙' : '☀'}
        </ToggleWrapper>
    );
}

const ToggleWrapper = styled.button`
    position: fixed;
    z-index: 999999;
    bottom: 4%;
    right: 3%;

    background-color: ${props => props.theme.backgroundColor};
    border: 1px solid #dadada;
    font-size: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 96px;
    height: 48px;
    border-radius: 30px;
`;