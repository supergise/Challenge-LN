import weater from "../../assets/icons/icon-weater.svg";
import clubLN from "../../assets/icons/icon-club.svg";

export const SubMenu = () => {
    return (
        <div className="w-full h-[40px] aligment bg-white  md:bg-gray-100">
            <section className="w-[488px] flex justify-center sm:justify-start gap-4 text-[14px]">
                <span className="hidden sm:flex font-bold text-Blue-LN">
                    Dólar:
                </span>
                <span>
                    BNA: <strong>$00,00/$00,00</strong>
                </span>
                <span>
                    Blue:<strong> $00,00/$00,00</strong>
                </span>
            </section>

            <section className="w-[324px] justify-start gap-4 hidden md:flex">
                <img src={weater} alt="clima" />
                <span className="text-[14px]">
                    <strong> 00.0˚</strong> Capital Federal
                </span>
            </section>

            <section className="w-[220px] justify-start hidden md:flex">
                <a className=" text-Blue-LN text-[14px]" href="#">
                    Recibí Newsletters
                </a>
            </section>

            <section className="w-[220px] hidden sm:flex justify-end gap-4">
                <img src={clubLN} alt="club la Nación" />
                <a href="#" className=" text-Blue-LN text-[14px]">
                    Descubrí tus beneficos
                </a>
            </section>
        </div>
    );
};
