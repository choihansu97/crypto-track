import styled from "styled-components";
import {useParams, useLocation} from 'react-router-dom';
import {useQuery} from "@tanstack/react-query";
import {fetchCoinInfo, getCoinPriceData} from "../apis/api";
import Loading from "../components/loading";
import Chart from "../components/chart";

export default function CoinView() {
    const {coinId} = useParams();
    const {state} = useLocation();

    const {
        isLoading: infoLoading,
        data: infoData
    } = useQuery({
        queryKey: ["info", coinId],
        queryFn: () => fetchCoinInfo(state)
    });

    const {
        isLoading: tickersLoading,
        data: tickersData
    } = useQuery({
        queryKey: ["tickers", coinId],
        queryFn: () => getCoinPriceData(state),
        // refetchInterval: 500000000000000,
    });

    const loading = infoLoading || tickersLoading;

    return (
        <>
            <Helmet>

            </Helmet>
            loading ? <Loading/> :
            <Wrapper>
                <Title>Coin infomation</Title>

                <Content>
                    <ContentItem>
                        <InnerDiv>
                            <SubTitle>RANK</SubTitle>
                            <ContentInfo>{infoData?.rank}</ContentInfo>
                        </InnerDiv>

                        <InnerDiv>
                            <SubTitle>SYMBOL</SubTitle>
                            <ContentInfo>{infoData?.symbol}</ContentInfo>
                        </InnerDiv>

                        <InnerDiv>
                            <SubTitle>PRICE</SubTitle>
                            <ContentInfo>{tickersData?.quotes?.USD?.price?.toFixed(3)}</ContentInfo>
                        </InnerDiv>
                    </ContentItem>

                    <ContentDescription>
                        {infoData?.description}
                    </ContentDescription>

                    <ContentItem>
                        <InnerDiv>
                            <SubTitle>TOTAL SUPPLY</SubTitle>
                            <ContentInfo>{tickersData?.total_supply}</ContentInfo>

                        </InnerDiv>
                        <InnerDiv>
                            <SubTitle>MAX SUPPLY</SubTitle>
                            <ContentInfo>{tickersData?.max_supply}</ContentInfo>
                        </InnerDiv>
                    </ContentItem>
                </Content>

                <TapWrapper>
                    <TapMenu>메뉴1</TapMenu>
                    <Chart state={state}/>
                </TapWrapper>
            </Wrapper>
        </>
    )
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

const Title = styled.h2`
    margin: 4rem 0;
    color: ${({theme}) => theme.textColor};
    font-size: 40px;
    font-weight: bold;
`;

const Content = styled.ul`
    display: flex;
    flex-direction: column;
`

const ContentDescription = styled.li`
    display: flex;
    padding: 1rem;
    margin: 2rem 0;
    font-size: 1.08rem;
    font-weight: 300;
`;

const ContentItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #f8f8f8;
    border-radius: 8px;
`;

const InnerDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;

const SubTitle = styled.h4`
    color: #121212;
    font-size: 1.15rem;
    font-weight: 400;
`;

const ContentInfo = styled.p`
    color: ${({theme}) => theme.themeColor};
    font-size: 1.25rem;
    font-weight: 500;
`;

const TapWrapper = styled.div`
    margin: 2rem;

    article {
        padding: 1rem;
        border: 1px solid #dadada;
        border-top: none;
    }
`;

const TapMenu = styled.div`
    a {
        display: block;
        flex: 1 1 50%;
        padding: 0.7rem;
        text-align: center;
        border: 1px solid #093687;
        font-size: 1.4rem;
        transition: all 200ms ease-in-out;
        background-color: white;

        &:first-child {
            border-right: 0 none;
        }

        &.active {
            background-color: #093687;
            color: #fff;
        }
`;