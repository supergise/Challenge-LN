import { useContext } from "react";
import { ApiContext } from "../context/ApiContex";

import iconLn from "../assets/icons/icon-ln-badge.png"


export const CardFullScreen = () => {

    const { getFirst } = useContext(ApiContext);

    console.log(getFirst());
    if(!getFirst()) {
        return null;
    }
    const { title, image, marquee } = getFirst();

    return (
        <section
            className="w-full h-[768px] image flex com-image bg-no-repeat bg-cover mb-16"
            style={{
                backgroundImage: `url("${image}")`,
            }}
        >
            <div className="w-full mt-[528px] bg-gradient-to-t from-black to-transparent">
                <article className="h-[240px] w-full flex flex-col justify-center items-start mx-auto max-w-[1280px]">
                    <span className="flex items-center justify-start pl-2 pr-4 py-2 mb-2 rounded-2xl gap-1 bg-gray-100 text-black border uppercase leading-4 text-[12px] font-bold">
                        <img src={iconLn} alt="icon la nación suscripciones" className="w-[20px] rounded" />
                        Exclusivo Suscriptor
                    </span>

                    <h1 className="mainTitle text-start">
                        {title}
                    </h1>

                    <h4 className="marqueeLight text-center">
                        {marquee}
                    </h4>
                </article>
            </div>
        </section>
    );
};