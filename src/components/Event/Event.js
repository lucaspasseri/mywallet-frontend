import styled from "styled-components";

export default function Event({eventDate, description, amount, categoryId}){

    return(
        <Container category={categoryId}>
            <div className="date">{eventDate}</div>
            <div className="text">{description}</div>
            <div className="amount">{amount}</div>  
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    width: 100%;
    .date {
        width: 20%;
    }
    .text {
        width: 55%;
    }
    .amount {
        width: 25%;
        color:${props => props.category === 1?"green":"red" }; 
    }
`;