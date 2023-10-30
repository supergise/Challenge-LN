import { useContext } from "react";
import { ApiContext } from "../../context/ApiContex";

import iconLn from "../../assets/icons/icon-ln-badge.png";

export const CardFullScreen = () => {
    const { getArticles } = useContext(ApiContext);

    const article = getArticles(1);

    const { title, image, marquee } = { ...article[0] };

    return (
        <section
            className="w-full h-[450px] md:h-[855px] lg:h-[768px] image flex com-image bg-no-repeat bg-cover mb-16"
            style={{
                backgroundImage: `url("${image}")`,
            }}
        >
            <div className="w-full px-4 pb-2 bg-gradient-to-t from-black to-transparent flex flex-col justify-end">
                <article className="h-[240px] flex flex-col justify-end items-start mx-auto  md:w-[736px] lg:w-[900px] xl:w-[1100px] lgNew:w-[1260px] xlNew:w-[1280px] gap-2">
                    <span className="flex items-center justify-start chipSuscriptor">
                        <img
                            src={iconLn}
                            alt="icon la nación suscripciones"
                            className="w-[20px] rounded"
                        />
                        Exclusivo Suscriptor
                    </span>

                    <h1 className="font-primary titleM md:text-[40px] lg:text-[48px] md:leading-[52px] text-start text-White-LN">{title}</h1>

                    <h4 className="marqueeLight text-center">{marquee}</h4>
                </article>
            </div>
        </section>
    );
};
