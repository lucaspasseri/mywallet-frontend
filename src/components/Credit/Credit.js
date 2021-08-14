import axios from "axios";
import React, { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";

import UserContext from "../../contexts/UserContext";
import { DescentralizedPage, TopBar, UserInteractions } from "../Styles/Components";

import CurrencyInput from "../CurrencyInput/CurrencyInput";

export default function Credit() {
	let history = useHistory();

	const [amount, setAmount] = useState("");
	const [description, setDescription] = useState("");
	const [loading, setLoading] = useState(false); 

	const { user } = useContext(UserContext);

	function newTransaction(event){
		event.preventDefault();
		const config = {
			headers: {
				Authorization: `Bearer ${user?.token}`,
			},
		};
        
		let correctAmount;

		correctAmount = amount.replace("R$", "");

		if(correctAmount.split(",").length===1){
			correctAmount = correctAmount.replaceAll(".","");
			correctAmount = correctAmount * 100;
		} else {
			correctAmount = correctAmount.replaceAll(".","");
            
			const part1 = correctAmount.split(",")[0];
			const part2 = correctAmount.split(",")[1];

			if(part2 === "" || part2==="0" || part2==="00"){
				correctAmount = 100*Number(part1);
			}else if (part2.length===1){
				correctAmount = 100*Number(part1) + 10*Number(part2);
			} else {
				correctAmount = 100*Number(part1) + Number(part2);
			}
		}

		const body = {
			amount: correctAmount,
			description
		}; 

		// eslint-disable-next-line no-undef
		const url = `${process.env.REACT_APP_API_BASE_URL}/historic/c`;

		setLoading(true);
		const request = axios.post(url, body, config);

		request.then(() => {
			setLoading(false);
			history.push("/home");
		});
		request.catch(e=>{
			if(e.response.status === 400){
				alert("Requisição não validada.");
			}

			if(e.response.status === 401){
				history.push("/");
			}
			if(e.response.status === 501){
				alert("Por favor, divida em transações menores.");
			}
           
			setLoading(false);
		});
	}
	return (
		<DescentralizedPage>
			<TopBar>
				<div>Nova entrada</div>
			</TopBar>
			<UserInteractions>
				<form onSubmit={newTransaction}>
					<CurrencyInput
						disabled={loading}
						value={amount} 
						onChange={e=> setAmount(e.target.value)}  
						placeholder="R$0,00" 
						type="text"
						required
					/>
					<input
						disabled={loading}
						value={description} 
						onChange={e=> setDescription(e.target.value)} 
						placeholder="Descrição"
						type="text" 
						required
					></input>
					<button 
						disabled={loading} 
						type="submit"
					>
						{loading?"Salvando...":"Salvar entrada"}
					</button>
				</form>
				{loading?
					<div className="fake-link">Voltar</div>
					:
					<Link to="/home" className="link"><div>Voltar</div></Link>
				}
			</UserInteractions>
		</DescentralizedPage>
	);
}