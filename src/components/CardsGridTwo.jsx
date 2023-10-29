import { Card } from "./Card";

export const CardsGridTwo = ({ articles }) => {
    return (
        <section className="mb-16">
            <h2 className="w-[920px] h-[41px] mb-4 font-primary text-2xl border-b">
                Card Group x 2
            </h2>

            <articles className="gridTwo w-[920px] grid md:grid-cols-2 gap-10">
                {articles().map((art) => {
                    return <Card key={art.id} {...art} type={1} />; // nueva card con font 24px
                })}
            </articles>
        </section>
    );
};