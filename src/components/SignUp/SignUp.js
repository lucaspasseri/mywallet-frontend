import { Link, useHistory } from "react-router-dom";

export default function SignUp() {

    let history = useHistory();

    function userLogin(event){
        event.preventDefault();
        history.push("/");
    }

    return (
        <div className="page">  
            <div>
                <div className="brand-name">My Wallet</div>
                <div className="user-interactions">
                    <form onSubmit={userLogin}>
                        <input placeholder="Nome"></input>
                        <input placeholder="E-mail"></input>
                        <input placeholder="Senha"></input>
                        <input placeholder="Confirme a senha"></input>
                        <button type="submit">Cadastrar</button>
                    </form>
                    <Link to="/" className="link"><div>Já tem uma conta? Entre agora!</div></Link>
                </div>
            </div>
		</div>
    );
}