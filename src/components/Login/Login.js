import { Link, useHistory } from "react-router-dom";

import {Page, BrandName, UserInteractions} from '../Styles/Components';

export default function Login() {
    let history = useHistory();

    function userLogin(event){
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