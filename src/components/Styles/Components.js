import styled from "styled-components";

export const BrandName = styled.div`
    line-height: 50px;
    color: #FFFFFF;
    text-align: center;
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    margin-bottom: 24px;
`;

export const Page = styled.div`
    background-color: #9056BE;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: auto;
`;

export const DescentralizedPage = styled.div`
    background-color: #9056BE; 
    height: calc(100vh - 78px);
    overflow: auto;
    margin-top: 78px;
`;

export const UserInteractions = styled.div`
    padding-top: 10px;
    
    form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 36px;

        button {
        width: 300px;
        height: 44px;
        background-color: #A762D6;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
        font-size: 20px;
        line-height: 23px;
        border: 0;
        }
    }

    input {
        width: 300px;
        height: 54px;
        background: #FFFFFF;
        border-radius: 5px;
        margin-bottom: 12px;
        border: 0;
        padding-left: 15px;
        font-family: 'Raleway', sans-serif;
        font-size: 20px;
        line-height: 23px;

        ::placeholder{
            
            color: #000000;
        }

        :disabled {
            filter: brightness(0.93);
        }
    }

    .link {
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        text-decoration: none;

        div {
            width: 100%;
            text-align: center;
        }
    }
    .fake-link {
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
        text-decoration: none;
        width: 100%;
        text-align: center;
    }

    @media (max-width: 300px) {
        input {
            width: 100vw;
        }

        form {
            button {
                width: 100vw;
            } 
        }
    }
`;

export const TopBar = styled.div`
    background-color: #9056BE;
    color: #FFF;
    width: 100%;
    height: 78px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    padding: 0 24px;
    top: 0;
    left: 0;
	box-shadow: 1px 10px 5px -2px rgba(0,0,0,0.47);
	-webkit-box-shadow: 1px 10px 5px -2px rgba(0,0,0,0.47);
	-moz-box-shadow: 1px 10px 5px -2px rgba(0,0,0,0.47);

    div {
        font-family: 'Raleway', sans-serif;
        font-weight: bold;
        font-size: 26px;
        line-height: 31px;
        color: #FFFFFF;
		display: flex;
		width: 100vw;
		
		@media (min-width: 600px) {
        width: 560px;
    	}
    }
	.logout {
		display: flex;
		justify-content: flex-end;
		padding-right: 10px;
	}
`;