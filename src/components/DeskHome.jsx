import { useContext } from "react";
import { LeftFocal } from "./LeftFocal";
import { ApiContext } from "../context/ApiContex";
import { CardsGridThree } from "./CardsGridThree";
import { CardsGridSix } from "./CardsGridSix";

export const DeskHome = () => {
    const { getArticles } = useContext(ApiContext);

    return (
        <main className="w-full aligment">
            <div className="w-max-[1340px] grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
                <section className="col-span-3 row-span-1">
                    <article className="hidden md:flex  col-span-3 row-span-1 max-w-[920px] h-[100px] mb-16 bg-gray-100">
                        cabezal_dsk 920x100
                    </article>

                    <LeftFocal articles={getArticles} />

                    <CardsGridSix articles={getArticles} />

                    <CardsGridThree articles={getArticles}  />
                </section>

                <aside className="col-span-1 row-span-1 w-[300px] h-[7641] bg-gray-100 hidden md:flex"></aside>
            </div>
        </main>
    );
};
