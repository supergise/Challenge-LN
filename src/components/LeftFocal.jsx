import { Card } from "./Card";

export const LeftFocal = ({ articles }) => {
    return (
        <div className="mb-16">
            <h2 className="max-w-[920px] h-[41px] mb-4 py-1 px-[16px] lg:px-0 titleMB border-b">
                Focal Izquierdo
            </h2>

            <section className="max-w-[920px] grid md:grid-cols-3 grid-cols-1 md:gap-[38px] gap-y-[32px]">
                <article className="md:max-w-[600px] col-span-2 row-span-2 border-r">
                    <div className="md:max-w-[560px]">
                        {articles(1).map((art) => (
                            <Card key={art.id} {...art} />
                        ))}
                    </div>
                </article>

                <article className="cardOne col-span-1 row-span-1">
                    {articles(2).map((art) => (
                        <Card key={art.id} {...art} />
                    ))}
                </article>
            </section>
        </div>
    );
};
