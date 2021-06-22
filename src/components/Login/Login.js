import styled from "styled-components"
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <Page>
            <div>
                <BrandName>My Wallet</BrandName>
                <UserInteractions>
                    <form>
                        <input></input>
                        <input></input>
                        <button>Entrar</button>
                    </form>
                    <Link className="link"><div>Primeira ves? Cadastre-se!</div></Link>
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
    color: white;
    text-align: center;
`;

const UserInteractions = styled.div`
    form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    input {
        width: 320px;
        height: 58px;

    }
    a {
        text-align: center;
        width: 100%;
    }
    .link {
        color: white;

        div {
            width: 100%;
            text-align: center;
        }
    }

`;