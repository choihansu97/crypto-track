import {Link} from "react-router-dom";
import styled from "styled-components";
import {useState, useEffect} from "react";
import {fetchCoinList} from "../apis/api";
import Loading from "../components/loading";

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
    const [coins, setCoins] = useState<ICoin[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchCoinList();
                setCoins(result.slice(0, 100));
                setIsLoading(false);
            } catch (error) {
                console.error(`불러올 수 있는 데이터가 없습니다.${error}`);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <Wrapper>
            <Header>
                <Title>타이틀입니다.</Title>
            </Header>

            {isLoading ? (
                <Loading/>
            ) : (
                <ContentList>
                    {coins.map((coin) => (
                        <Coin key={coin.id}>
                            <Link
                                to={`/coin-view/${coin.id}`}
                                state={{name: coin.name}}
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