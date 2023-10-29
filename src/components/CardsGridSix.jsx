import { Card } from "./Card";

export const CardsGridSix = ({ articles }) => {
    return (
        <section className="mb-16">
            <h2 className="w-[920px] h-[41px] mb-4 font-primary text-2xl border-b">
                Card Group x 6
            </h2>

            <article className="gridSix w-[920px] grid md:grid-cols-3 gap-10">
                {articles(6).map((art) => {
                    return <Card key={art.id} {...art} />;
                })}
            </article>
        </section>
    );
};
