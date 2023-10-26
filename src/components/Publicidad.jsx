import bannerRayas from "../assets/img/bg-banner.png";

export const Publicidad = () => {
    return (
        <section className="w-full h-[148px] flex justify-center items-center">
            <article className="w-[920px] h-[100px] relative">
                <div className="w-full">
                    <span className="w-[83px] h-[24px] flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-black uppercase bg-white text-[11px]">
                        Publicidad
                    </span>
                </div>
                <img src={bannerRayas} alt="banner a rayas" />
            </article>
        </section>
    );
};
