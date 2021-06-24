import { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import UserContext from "../../contexts/UserContext";
import {Page, BrandName, UserInteractions} from '../Styles/Components';

export default function SignUp() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [loading, setLoading] = useState(false);

    const { user, setUser } = useContext(UserContext);
    let history = useHistory();

    /* useEffect(() => {
        if (localStorage.user) {
          const userStorage = JSON.parse(localStorage.user);
          setUser(userStorage);
          history.push("/timeline");
        }
      }, [user]); */

    function newUser(event){
        event.preventDefault();

        /* function validateEmail(email) {
            const re =
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        } */

        const validName = (name.trim().length > 0);
        const validEmail = email.trim().length > 0;
        const validPassword = (password.trim().length > 0);
        const validRePassword = (rePassword === password);

        if( validName && validEmail && validPassword && validRePassword){
            const body = {
                name,
                email,
                password,
                rePassword
            };
            setLoading(true);
            const request = axios.post(
                "http://localhost:4000/signup",
                body
            );
            request.then((response) => {
                console.log(response.data);
                console.log(response);
                history.push("/");
                setLoading(false);
            });
    
            request.catch((e) => {
                alert(e);
                setLoading(false);
            });

        } else {
            alert("Campo(s) incorreto(s) ou em branco.");
            setLoading(false);
        }

    }

    return (
        <Page>  
            <div>
                <BrandName>My Wallet</BrandName>
                <UserInteractions>
                    <form onSubmit={newUser}>
                        <input
                            disabled={loading} 
                            value={name} 
                            onChange={e=> setName(e.target.value)} 
                            placeholder="Nome"
                            required
                        ></input>
                        <input 
                            disabled={loading} 
                            value={email} 
                            onChange={e=> setEmail(e.target.value)} 
                            placeholder="E-mail"
                            required
                        ></input>
                        <input
                            disabled={loading}
                            value={password}
                            onChange={e=> setPassword(e.target.value)} 
                            placeholder="Senha"
                            required
                        ></input>
                        <input
                            disabled={loading}
                            value={rePassword} 
                            onChange={e=> setRePassword(e.target.value)} 
                            placeholder="Confirme a senha"
                            required
                        ></input>
                        <button disabled={loading} type="submit">
                            {loading? <>Cadastrando...</> : <>Cadastrar</>}
                        </button>
                    </form>
                    {loading?
                        <div className="fake-link">Já tem uma conta? Entre agora!</div>
                        :
                        <Link to="/" className="link"><div>Já tem uma conta? Entre agora!</div></Link>
                    }
                </UserInteractions>
            </div>
		</Page>
    );
}