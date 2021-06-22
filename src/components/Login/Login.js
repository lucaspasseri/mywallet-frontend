import styled from "styled-components"
import { Link, useHistory } from "react-router-dom";

export default function Login() {
    let history = useHistory();

    function userLogin(event){
        console.log("oi");
        event.preventDefault();
        history.push("/home");
    }

    return (
        <Page>
            <div>
                <BrandName>My Wallet</BrandName>
                <UserInteractions>
                    <form onSubmit={userLogin}>
                        <input placeholder="E-mail"></input>
                        <input placeholder="Senha"></input>
                        <button type="submit">Entrar</button>
                    </form>
                    <Link to="/signin" className="link"><div>Primeira vez? Cadastre-se!</div></Link>
                </UserInteractions>
            </div>
        </Page>     
    );
}

const Page = styled.div`
    background-color: #9056BE;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 550px;
`;

const BrandName = styled.div`
    line-height: 50px;
    color: #FFFFFF;
    text-align: center;
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    margin-bottom: 24px;    
`;

const UserInteractions = styled.div`
    form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 36px;

        button {
        width: 318px;
        height: 44px;
        background-color: #A762D6;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        border: 0;
        }
    }

    input {
        width: 318px;
        height: 54px;
        background: #FFFFFF;
        border-radius: 5px;
        margin-bottom: 12px;
        border: 0;
        padding-left: 15px;
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
        line-height: 23px;

        ::placeholder{
            
            color: #000000;
        }
    }

    .link {
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        text-decoration: none;

        div {
            width: 100%;
            text-align: center;
        }
    }

    @media (max-width: 320px) {
        input {
            width: 100%;
        }

        form {
            button {
                width: 100%;
            } 
        }
    }
`;