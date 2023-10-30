import { Card } from "./Card";

export const CardsGridSix = ({ articles }) => {
    return (
        <section className="mb-16">
            <h2 className="max-w-[920px] h-[41px] mb-4 titleMB border-b py-1 px-[16px] lg:px-0">
                Card Group x 6
            </h2>

            <article className="gridSix max-w-[920px] grid md:grid-cols-3 gap-4 md:px-[16px] lg:px-0">
                {articles(6).map((art) => {
                    return <Card key={art.id} {...art} />;
                })}
            </article>
        </section>
    );
};
