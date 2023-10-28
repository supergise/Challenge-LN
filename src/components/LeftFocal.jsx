import { Card } from "./Card";

export const LeftFocal = ({ articles }) => {
    return (
        <>
            <h2 className="w-[920px] h-[41px] mb-4 font-primary text-2xl border-b">
                Focal Izquierdo
            </h2>

            <section className="w-[920px] grid grid-cols-3 gap-[38px] gap-y-[64px]">
                <article className="w-[600px] col-span-2 row-span-2 border-r">
                    <div className="w-[560px]">
                        <h1 className="font-primary text-[32px] tracking-tight leading-10 mb-2">
                            Lead. Title esto es un titulo de la novedad con unas
                            cuantas lineas que ocupar
                        </h1>
                        <p className="mb-2 leading-6">
                            Subhead. Lana soñaba con volar a la luna. Todas las
                            tardes se tumbaba en su cama y se imaginaba cómo
                            sería su viaje a bordo de su propia nave espacial.
                        </p>
                        <h4 className="font-bold mb-4 text-base">
                            Author / Marquee
                        </h4>
                        <img
                            className=""
                            src="https://www.lanacion.com.ar/resizer/v2/la-carga-rapida-utiliza-cargadores-especialmente-TKZW5J5FEZEVHOT6VOICICRJO4.jpg?auth=084ca53f76a483acbb0b89a75b1d77fd148a76b5be77ab14e53ba68acd36baf7&width=880&height=586&quality=70&smart=true"
                        />
                    </div>
                </article>

                <div>
                    {articles().map((art) => (
                        <Card key={art.id} {...art} />
                    ))}
                </div>
            </section>
        </>
    );
};
