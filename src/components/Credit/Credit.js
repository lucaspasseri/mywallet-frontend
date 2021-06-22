import { DescentralizedPage, TopBar, UserInteractions } from "../Styles/Components";

export default function Credit() {
    return (
        <DescentralizedPage>
                <TopBar>
                    <div>Nova entrada</div>
                </TopBar>
                <UserInteractions>
                    <form>
                        <input placeholder="Valor"></input>
                        <input placeholder="Descrição"></input>
                        <button type="submit">Salvar entrada</button>
                    </form>
                </UserInteractions>
        </DescentralizedPage>
    );
}