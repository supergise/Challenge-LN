import { Card } from "./Card";

export const LeftFocal = ({ articles }) => {
    return (
        <div className="mb-16">
            <h2 className="w-[920px] h-[41px] mb-4 font-primary text-2xl border-b">
                Focal Izquierdo
            </h2>
            
            <section className="w-[920px] grid grid-cols-3 gap-[38px] gap-y-[32px]">
                <article className="w-[600px] col-span-2 row-span-2 border-r">
                    <div className="w-[560px]">
                    {articles().slice(0,1).map((art) => (
                        <Card key={art.id} {...art} type={4} />
                    ))}
                    </div>
                </article>

                <article className="cardOne col-span-1 row-span-1">
                    {articles().slice(1,3).map((art) => (
                        <Card key={art.id} {...art} type={1} />
                    ))}
                </article>
            </section>
        </div>
    );
};