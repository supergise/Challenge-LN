import { Main } from "./components/main/Main";
import { MainLead } from "./components/header/MainLead";
import { NavBar } from "./components/header/NavBar";
import { SubMenu } from "./components/header/SubMenu";
import { ApiContextProvider } from "./context/ApiContextProvider";

import "./App.css";

function App() {
    return (
        <ApiContextProvider>
            <div className="box-border w-full">
                <NavBar>
                    <SubMenu />
                    <MainLead />
                    <Main />
                </NavBar>
            </div>
        </ApiContextProvider>
    );
}

export default App;