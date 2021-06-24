import styled from 'styled-components';
import { RiLogoutBoxRLine } from "react-icons/ri";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import { useEffect, useContext, useState } from 'react';
import axios from 'axios';

import UserContext from "../../contexts/UserContext";
import {Page, TopBar} from '../Styles/Components';
import Event from "../Event/Event";

export default function Home() {
    let history = useHistory();

    const { user, setUser } = useContext(UserContext);

    const [name, setName] = useState("Fulano");
    const [historic, setHistoric] = useState();

    useEffect(() => {
        if(user){
            setName(user.name);
            getHistoric();
        } else {
            if (localStorage.user) {
                const userStorage = JSON.parse(localStorage.user);
                setUser(userStorage);
            } else {
                history.push("/");
            }   
        }
    }, [setName, user, setUser, history]);   

    function getHistoric(){
        const config = {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
        };  
        let url = `http://localhost:4000/historic`;
        const request = axios.get(url, config);

        request.then(res => {
            console.log(res.data);
            setHistoric(res.data);
        });
        request.catch(e => {
            console.log(e);
        });
    }

    return (
        <Page>  
            <div>
                <TopBar>
                    <div>Olá, {name}</div>
                    <div><RiLogoutBoxRLine/></div>
                </TopBar>
                <Timeline>
                    {historic?
                        <div>
                            <div>
                                {historic.transactions.map((t,i)=>{
                                    return <Event 
                                        key = {i}
                                        eventDate = {t.eventDate}
                                        description = {t.description}
                                        amount = {t.amount}
                                        categoryId = {t.categoryId}
                                    />
                                })}
                            </div>
                            <div className="balance">
                                <div>Saldo</div>
                                <div>{historic.balance}</div> 
                            </div>
                        </div>
                        :
                        <>
                            <span>Não há registros de</span>
                            <span>entrada e saída</span>
                        </>
                    }        
                </Timeline>
                <Actions>
                    <Link className="link" to="/credit">
                        <div className="icon"><FiPlusCircle/></div>
                        <div>
                            <span>Nova</span>
                            <span>entrada</span>
                        </div>
                    </Link>
                    <Link className="link" to="/debt">
                        <div className="icon"><FiMinusCircle/></div>
                        <div>
                            <span>Nova</span>
                            <span>saida</span>
                        </div>
                    </Link>
                </Actions>
            </div>
		</Page>
    );
}
const Actions = styled.div`
    width: calc(100vw - 48px);
    display: flex;
    justify-content: space-between; 
    margin: 13px 0 16px;
        
        .link {
            width: calc(50% - 8px);
            height: 114px;
            border-radius: 5px;
            background: #A328D6;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 10px;

            .icon {
                font-size: 26px;
            }

            > div {
                color: #FFF;
                font-family: 'Raleway', sans-serif;
                font-weight: bold;
                font-size: 17px;
                line-height: 20px;

                span {
                    display: block;
                    text-decoration: underline #A328D6;
                }
            }
        }
    
    @media (max-width: 330px) {
        width: 100vw;
    }
`;

const Timeline = styled.div`
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    width: calc(100vw - 48px);
    height: 446px;
    margin-top: 190px;
    /* justify-content: center;
    align-items: center; */
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;

    span{
        display: block;
    }
    > div {
        height: 100%;
        border: 1px solid red;
        display: flex;
        flex-direction: column;
        justify-content:space-between;
    }
    .balance {
        display: flex;
        justify-content: space-between;
    }
    @media (max-width: 330px) {
        width: 100vw;
    }
`;