import styled from "styled-components";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';

export default function Event({eventDate, description, amount, categoryId}){

    const eventShow = dayjs(Date(eventDate)).format('DD/MM');
    
    const bigDescription = description.length > 20? "big":"normal";

    const sAmount = String(amount);
    let integerPart = sAmount.substring(0,sAmount.length-2);
    if(integerPart===""){
        integerPart="0";
    }
    const decimalPart = sAmount.substring(sAmount.length-2, sAmount.length); 
    const amountShow = integerPart+","+decimalPart;

    return(
        <Container category={categoryId}>
            <div className="date">{eventShow}</div>
            <div className={bigDescription==="big"?"text big-text":"text"} big={bigDescription}>{description}</div>
            <div className="amount">{amountShow}</div>  
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    width: 100%;
    font-family: 'Raleway', sans-serif;
    height: 40px;
    .date {
        width: 15%;
        font-size: 16px;
        line-height: 19px;
        color: #C6C6C6;
        display: flex;
        align-items: center;
    }
    .text {
        width: 55%;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
        display: flex;
        align-items: center;
        padding-left: 6px;
        word-break: break-word;
    }
    .big-text {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 4px 6px 0;
    }
    .amount {
        width: 30%;
        font-size: 16px;
        line-height: 19px;
        color:${props => props.category === 1?"green":"red" }; 
        display: flex;
        justify-content:flex-end;
        align-items: center;
    }
`;