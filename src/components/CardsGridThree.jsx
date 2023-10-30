import { Card } from "./Card";

export const CardsGridThree = ({ articles }) => {
    return (
        <section className="mb-16">
            <h2 className="max-w-[920px] h-[41px] mb-4 py-1 px-[16px] lg:px-0 titleMB border-b">
                Card Group x 3
            </h2>

            <article className="gridSix max-w-[920px] grid md:grid-cols-3 md:px-[16px] lg:px-0 gap-4">
                {articles(3).map((art) => {
                    return <Card key={art.id} {...art} />;
                })}
            </article>
        </section>
    );
};