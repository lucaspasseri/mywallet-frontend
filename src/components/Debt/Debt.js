import { DescentralizedPage, TopBar, UserInteractions } from "../Styles/Components";

export default function Debt() {
    return (
        <DescentralizedPage>
                <TopBar>
                    <div>Nova saída</div>
                </TopBar>
                <UserInteractions>
                    <form>
                        <input placeholder="Valor"></input>
                        <input placeholder="Descrição"></input>
                        <button type="submit">Salvar saída</button>
                    </form>
                </UserInteractions>
        </DescentralizedPage>
    );
}

