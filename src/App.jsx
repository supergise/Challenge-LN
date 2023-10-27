import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { NavBar } from "./components/NavBar";
import { ApiContextProvider } from "./context/ApiContextProvider";

import "./App.css";

function App() {
    return (
        <ApiContextProvider>
            <div className="box-border w-full">
                <NavBar>
                    <Header />
                    <Main />
                </NavBar>
            </div>
        </ApiContextProvider>
    );
}

export default App;