import { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import {Page, BrandName, UserInteractions } from '../Styles/Components';

import UserContext from "../../contexts/UserContext";

export default function LogIn() {
    let history = useHistory();

    const { setUser } = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (localStorage.user) {
          const userStorage = JSON.parse(localStorage.user);
          setUser(userStorage);
          history.push("/home");
        }
    });

    function userLogin(event){
        event.preventDefault();

        const validEmail = (email.trim().length > 0);
        const validPassword = (password.trim().length > 0);

        if( validEmail && validPassword){
            const body = {
                email,
                password
            };

            setLoading(true);

            const request = axios.post(
				`${process.env.REACT_APP_API_BASE_URL}/signin`,
                body
            );
            request.then((response) => {
                setLoading(false);

                setUser(response.data);

                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data)
                );

                history.push("/home");
            });
    
            request.catch((e) => {
                alert(e.response.data);
                setLoading(false);
            });

        } else {
            alert("Campo(s) incorreto(s) ou em branco.");
        }
    }

    return (
        <Page>
            <div>
                <BrandName>My Wallet</BrandName>
                <UserInteractions>
                    <form onSubmit={userLogin}>
                        <input 
                            disabled={loading} 
                            value={email} 
                            onChange={e=> setEmail(e.target.value)} 
                            placeholder="E-mail"
                            type="email"
                            required
                        ></input>
                        <input
                            disabled={loading}
                            value={password}
                            onChange={e=> setPassword(e.target.value)} 
                            placeholder="Senha"
                            type="password"
                            required
                        ></input>
                        <button disabled={loading} type="submit">
                            {loading? <>Entrando...</> : <>Entrar</>}
                        </button>
                    </form>
                    {loading?
                        <div className="fake-link">Primeira vez? Cadastre-se!</div>
                        :
                        <Link to="/signup" className="link"><div>Primeira vez? Cadastre-se!</div></Link>
                    }
                </UserInteractions>
            </div>
        </Page>     
    );
}