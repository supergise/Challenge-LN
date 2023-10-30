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
            <div className="w-full h-[49px] md:h-[72px] px-4 aligment sticky top-0 border-b border-gray-300 bg-white z-10">
                <div className="w-full flex justify-between lgNew:aligment">
                    <div className="w-[420px] h-[40px] items-center hidden lgNew:flex space-x-6">
                        <button
                            className="width-auto h-[40px] aligment button bg-gray-100 hover:opacity-80"
                            title="Secciones"
                            type="button"
                        >
                            <img
                                src={iconHamburger}
                                alt="menú hamburguesa"
                                className="w-4 mr-[10px]"
                            />
                            Secciones
                        </button>

                        <button className="w-auto h-[40px] aligment button bg-gray-100 hover:opacity-80">
                            <img
                                src={iconSearch}
                                alt="Buscar"
                                className="w-4 mr-[10px]"
                            />
                            Buscar
                        </button>
                    </div>

                    <div className="w-[164px] md:w-[420px] flex justify-start items-center lgNew:aligment">
                        <img src={logo} alt="Logo de La Nación" />
                    </div>

                    <div className="w-[420px] justify-end space-x-6 hidden md:flex">
                        <button className=" h-[40px] aligment button border-gray-100  bg-Yellow-LN hover:opacity-80">
                            Suscribite
                        </button>

                        <button className=" h-[40px] justify-center align-center border border-Blue-LN text-Blue-LN hover:opacity-80 button">
                            Ingresar
                        </button>
                    </div>

                    <div className="w-[120px] justify-end space-x-6 md:hidden flex hover:opacity-80">
                        <button className="aligment text-Blue-LN font-bold text-xs uppercase">
                            Suscribite
                        </button>
                        <img
                            src={iconSearch}
                            alt="Buscar"
                            className="h-[24px] mr-[10px]"
                        />
                    </div>
                </div>
            </div>

            <SubMenu />
            <MainLead />
            <Header />
            <Main />
        </div>
    );
};
