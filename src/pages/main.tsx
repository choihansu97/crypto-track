import {Link} from "react-router-dom";
import styled from "styled-components";
import {fetchCoinList} from "../apis/api";
import Loading from "../components/loading";
import {useQuery} from "@tanstack/react-query";

interface ICoin {
    id: string,
    name: string,
    symbol: string,
    rank: number,
    is_new: boolean,
    is_active: boolean,
    type: string
}

export default function Main() {
    const { isLoading, data } = useQuery<ICoin>({ queryKey: ["allCoins"], queryFn: fetchCoinList });

    return (
        <Wrapper>
            <Header>
                <Title>타이틀입니다.</Title>
            </Header>

            {isLoading ? (
                <Loading/>
            ) : (
                <ContentList>
                    {data?.slice(0, 100).map((coin) => (
                        <Coin key={coin.id}>
                            <Link
                                to={`/coin-view/${coin.id}`}
                                state={coin}
                            >
                                {coin.name}
                            </Link>
                        </Coin>
                    ))}
                </ContentList>
            )}
        </Wrapper>
    );
}

const Wrapper = styled.article`
    display: flex;
    flex-direction: column;
`;

const Header = styled.header`
    width: 100%;
    margin: 2rem 0;
`;

const Title = styled.h2`
    color: #121212;
    font-size: 32px;
    font-weight: bold;
`;

const ContentList = styled.ul`
    display: flex;
    flex-direction: column;
`;

const Coin = styled.li`
    padding: 1rem;
    border: 1px solid #dadada;
`;