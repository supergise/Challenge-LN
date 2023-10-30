export const Publicidad = () => {
    return (
        <section className="w-full h-[148px] hidden  md:aligment">
            <article
                className="w-[920px] h-[100px] justify-center image flex com-image bg-no-repeat bg-cover"
                style={{ backgroundImage: `url("/bg-banner.png")` }}
            >
                <span className="w-[83px] h-[24px] aligment border border-black uppercase bg-white text-[11px]">
                    Publicidad
                </span>
            </article>
        </section>
    );
};
