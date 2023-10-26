import { UserProvider } from "./context/UserProvider";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { NavBar } from "./components/NavBar";
import "./App.css";

function App() {
    return (
        <UserProvider>
            <div className="box-border w-full">
                <NavBar>
                    <Header />
                    <Main />
                </NavBar>
            </div>
        </UserProvider>
    );
}

export default App;
