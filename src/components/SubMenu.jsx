import weater from "../assets/icons/icon-weater.svg";
import clubLN from "../assets/icons/icon-club.svg";

export const SubMenu = () => {
    return (
        <div className="w-full h-[40px] aligment bg-gray-100">
            <section className="w-[488px] flex gap-4 text-[14px]">
                <span className="font-bold text-Blue-LN">Dólar:</span>
                <span>
                    BNA: <strong>$00,00/$00,00</strong>
                </span>
                <span>
                    Blue:<strong> $00,00/$00,00</strong>
                </span>
            </section>

            <section className="w-[324px] flex justify-start gap-4">
                <img src={weater} alt="clima" />
                <span className="text-[14px]">
                    <strong> 00.0˚</strong> Capital Federal
                </span>
            </section>

            <section className="w-[220px] flex justify-start">
                <a className=" text-Blue-LN text-[14px]" href="#">Recibí Newsletters</a>
            </section>

            <section className="w-[220px] flex justify-end gap-4">
                <img src={clubLN} alt="club la Nación" />
                <a href="#" className=" text-Blue-LN text-[14px]">Descubrí tus beneficos</a>
            </section>
        </div>
    );
};
