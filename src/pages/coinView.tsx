import styled from "styled-components";

export default function CoinView () {
    return (
        <>
            뷰페이지입니다.
        </>
    )
}


const Wrapper = styled.article`
  display: flex;
`;

const Table = styled.table `
  width: 100%;
  font-size: 14px;
  text-align: left;
  
   thead {
     border-top: 1px solid #dadada;
   }
  
  th { 
    padding: 0.8rem;
    background-color: white;
    color: #121212;
    font-weight: bold;
  }
  
  td {
    padding: 0.8rem;
    color: #121212;
    border-bottom: 1px solid #dadada
  }
`;

const Links = styled.ul `
  display: flex;
  flex-wrap: wrap;
  gap: 0 0.5rem;
  width: 100%;
`;

const TapWrapper = styled.div `
  margin: 2rem;
  article {
    padding: 1rem;
    border: 1px solid #dadada;
    border-top: none;
  }
`;

const TapMenu = styled.div `
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