import axios from 'axios';
import { useState, useContext } from 'react';

import UserContext from "../../contexts/UserContext";
import { DescentralizedPage, TopBar, UserInteractions } from "../Styles/Components";

export default function Credit() {

    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState(""); 

    const { user } = useContext(UserContext);

    function newTransaction(event){
        event.preventDefault();
        const config = {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
        }; 
        const body = {
            amount,
            description
        }; 
        let url = `http://localhost:4000/historic/c`;
        const request = axios.post(url, body, config);

        request.then(res => console.log("r"+res.data));
        request.catch(e=>console.log("e"+e));
    }
    return (
        <DescentralizedPage>
                <TopBar>
                    <div>Nova entrada</div>
                </TopBar>
                <UserInteractions>
                    <form onSubmit={newTransaction}>
                        <input
                            value={amount} 
                            onChange={e=> setAmount(e.target.value)}  
                            placeholder="Valor" 
                            required
                        ></input>
                        <input
                            value={description} 
                            onChange={e=> setDescription(e.target.value)} 
                            placeholder="Descrição" 
                            required></input>
                        <button type="submit">Salvar entrada</button>
                    </form>
                </UserInteractions>
        </DescentralizedPage>
    );
}