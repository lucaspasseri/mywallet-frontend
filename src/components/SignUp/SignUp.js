import { Link, useHistory } from "react-router-dom";

import {Page, BrandName, UserInteractions} from '../Styles/Components';

export default function SignUp() {

    let history = useHistory();

    function userLogin(event){
        event.preventDefault();
        history.push("/");
    }

    return (
        <Page>  
            <div>
                <BrandName>My Wallet</BrandName>
                <UserInteractions>
                    <form onSubmit={userLogin}>
                        <input placeholder="Nome"></input>
                        <input placeholder="E-mail"></input>
                        <input placeholder="Senha"></input>
                        <input placeholder="Confirme a senha"></input>
                        <button type="submit">Cadastrar</button>
                    </form>
                    <Link to="/" className="link"><div>Já tem uma conta? Entre agora!</div></Link>
                </UserInteractions>
            </div>
		</Page>
    );
}