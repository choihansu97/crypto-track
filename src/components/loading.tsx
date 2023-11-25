import styled from "styled-components";
import {Oval} from 'react-loader-spinner'

export default function Loading() {
    return (
        <Wrapper>
            <Oval
                color="#ff0000"
                width={100}
                height={100}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`;