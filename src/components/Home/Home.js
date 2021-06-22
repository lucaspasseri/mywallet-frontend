import styled from 'styled-components';
import { RiLogoutBoxRLine } from "react-icons/ri";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

import {Page} from '../Styles/Components';

export default function Home() {
    return (
        <Page>  
            <div>
                <TopBar>
                    <div>Olá, Fulano</div>
                    <div><RiLogoutBoxRLine/></div>
                </TopBar>
                <Timeline>
                    <span>Não há registros de</span>
                    <span>entrada e saída</span> 
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

const TopBar = styled.div`
    background-color: #9056BE;
    color: #FFF;
    width: 100%;
    height: 78px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    padding: 0 24px;
    top: 0;
    left: 0;

    div {
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
    }
`;

const Timeline = styled.div`
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    width: calc(100vw - 48px);
    height: 446px;
    margin-top: 190px;
    justify-content: center;
    align-items: center;
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;

    span{
        display: block;
    }

    @media (max-width: 330px) {
        width: 100vw;
    }
`;