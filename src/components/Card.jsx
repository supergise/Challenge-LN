export const Card = ({ art }) => {
    return (
        <div>
            {/* // arreglar pb por gap row */}
            <article className="cardOne col-span-1 row-span-1 h-[304px]">
                {/* <img
                src={art.url}
                alt={art.title}
            /> */}
                <div className="py-[8px]">
                    <h3 className="pb-[8px] font-secondary text-lg leading-[28px] tracking-[-0.2px]">
                        {art} Lead. Title esto es un titulo de la novedad con
                        unas cuantas lineas que ocupar
                    </h3>
                    <h4 className="font-bold text-base">Author / Marquee</h4>
                </div>
            </article>

            <article className="cardTwo col-span-1 row-span-1 h-[400px] pb-[16px] gap-y-5">
                <h1 className="font-primary text-[32px] tracking-tight leading-10 mb-2">
                    Lead. Title esto es un titulo de la novedad con unas cuantas
                    lineas que ocupar
                </h1>
                <p>
                    Subhead. Lana soñaba con volar a la luna. Todas las tardes
                    se tumbaba en su cama y se imaginaba cómo sería su viaje a
                    bordo de su propia nave espacial.
                </p>
                <div className="flex gap-[8px]">
                    <img
                        src="https://www.lanacion.com.ar/resizer/v2/como-se-puede-ver-tu-nombre-en-3d-segun-la-DDNB2IHCCFF5RGZBTCHEFDUTNU.jpg?auth=f6a83e860bc1f0612f7593de8a8e6a6dc67aa806d09bba24333853953f1d3942&amp;width=420&amp;height=280&amp;quality=70&amp;smart=true"
                        className="w-[24px] h-[24px] rounded-full"
                        alt="Foto del autor"
                    />
                    <h4 className="font-bold text-base">Author / Marquee</h4>
                </div>
            </article>

            <article className="cardThree col-span-1 row-span-1 h-[330px] pb-[16px] gap-y-5">
                <div className="w-[280px] h-[268] flex-box border px-4 py-4">
                    <h1 className="font-primary text-[20px] tracking-tight leading-7 mb-2 text-center">
                        Lead. Title cuando se dieron cuenta, los dos hermanos
                        estaban preparándose para alunizar.
                    </h1>
                    <div className="flex justify-center mb-2">
                        <img
                            src="https://www.lanacion.com.ar/resizer/v2/como-se-puede-ver-tu-nombre-en-3d-segun-la-DDNB2IHCCFF5RGZBTCHEFDUTNU.jpg?auth=f6a83e860bc1f0612f7593de8a8e6a6dc67aa806d09bba24333853953f1d3942&amp;width=420&amp;height=280&amp;quality=70&amp;smart=true"
                            className="w-[56px] h-[56px] rounded-full"
                            alt="Foto del autor"
                        />
                    </div>
                    <h4 className="font-bold text-base text-center">
                        Author full name
                    </h4>
                </div>
            </article>
        </div>
    );
};
