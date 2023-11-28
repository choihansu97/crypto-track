import {Link} from "react-router-dom";
import styled from "styled-components";
import {fetchCoinList} from "../apis/api";
import Loading from "../components/loading";
import {useQuery} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

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
    const {isLoading, data} = useQuery<ICoin[]>({queryKey: ["allCoins"], queryFn: fetchCoinList});

    return (
        <Wrapper>
            {isLoading ? <Loading/> :
                <ContentList>
                    {data?.slice(0, 100).map((coin) => (
                        <Coin key={coin.id}>
                            <Link
                                to={`/coin-view/${coin.id}`}
                                state={coin.id}
                            >
                                <Img
                                    src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                                    alt={coin.name}/>
                                {coin.name}
                            </Link>
                        </Coin>
                    ))}
                </ContentList>
            }
            <ReactQueryDevtools initialIsOpen={true}/>
        </Wrapper>
    );
}

const Wrapper = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 860px;
    width: 100%;
    padding: 1rem;
    margin: 0 auto;
`;

const ContentList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
`;

const Coin = styled.li`
    width: 100%;
    border: 1px solid #dadada;
    border-radius: 16px;
    background-color: white;

    a {
        display: flex;
        align-items: center;
        gap: 24px;
        padding: 1rem;
        border-radius: 16px;
        font-size: 24px;
        font-weight: 500;
        text-decoration: none;

        &:hover {
            background-color: #f9f9f9;
        }
    }
`;

const Img = styled.img`
    width: 64px;
    height: 64px;
`