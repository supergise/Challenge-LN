import { Header } from "./Header";
import { Main } from "./Main";
import { SubMenu } from "./SubMenu";
import { MainLead } from "./MainLead";

import iconHamburger from "../assets/icons/icon-hamburger.svg";
import iconSearch from "../assets/icons/icon-search.svg";
import logo from "../assets/img/logo.svg";

export const NavBar = () => {
    return (
        <div>
            <div className="w-full h-[73px] aligment sticky top-0 border-b border-gray-300 bg-white">
                <div className="w-full aligment">
                    <div className="w-[420px] h-[40px] items-center hidden xl:flex space-x-6">
                        <button
                            className="width-auto h-[40px] aligment button bg-gray-100 hover:opacity-80"
                            title="Secciones"
                            type="button"
                        >
                            <img
                                src={iconHamburger}
                                alt="menú hamburguesa"
                                className="w-[16px] mr-[10px]"
                            />
                            Secciones
                        </button>

                        <button className="w-auto h-[40px] aligment button bg-gray-100 hover:opacity-80">
                            <img
                                src={iconSearch}
                                alt="Buscar"
                                className="w-[16px] mr-[10px]"
                            />
                            Buscar
                        </button>
                    </div>

                    <div className="w-[420px] h-[40px] aligment">
                        <img src={logo} alt="Logo de La Nación" />
                    </div>

                    <div className="w-[420px] flex justify-end space-x-6">
                        <button className="w-[105px] h-[40px] aligment button border-gray-100  bg-Yellow-LN hover:opacity-80">
                            Suscribite
                        </button>

                        <button className="w-[132px] h-[40px] hidden lg:flex aligment border border-Blue-LN text-Blue-LN hover:opacity-80 button">
                            Ingresar
                        </button>
                    </div>
                </div>
            </div>

            <SubMenu />
            <MainLead/>
            <Header />
            <Main />

        </div>
    );
};
