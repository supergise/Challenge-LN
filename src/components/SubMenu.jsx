import weater from "../assets/icons/icon-weater.svg";
import clubLN from "../assets/icons/icon-club.svg";

export const SubMenu = () => {
    return (
        <div className="w-full h-[40px] flex justify-center items-center bg-gray-100">
            <section className="w-[488px] flex">
                <span className="font-bold text-blue-700">Dólar:</span>
                <span>
                    BNA: <strong>$00,00/$00,00</strong> Blue:{" "}
                    <strong>$00,00/$00,00</strong>
                </span>
            </section>

            <section className="w-[324px] flex justify-start">
                <img className="mr-[20px]" src={weater} alt="clima" />
                <span>
                    <strong> 00.0˚</strong> Capital Federal
                </span>
            </section>

            <section className="w-[220px] flex justify-start">
                <a className="text-blue-700" href="#">Recibí Newsletters</a>
            </section>

            <section className="w-[220px] flex justify-start">
                <img className="mr-[20px]" src={clubLN} alt="club la Nación" />
                <a href="#" className="text-blue-700">Descubrí tus beneficos</a>
            </section>
        </div>
    );
};
