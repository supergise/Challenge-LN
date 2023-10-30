import { useContext } from "react";
import { LeftFocal } from "../grid/LeftFocal";
import { ApiContext } from "../../context/ApiContex";
import { CardsGridThree } from "../grid/CardsGridThree";
import { CardsGridSix } from "../grid/CardsGridSix";

export const DeskHome = () => {
    const { getArticles } = useContext(ApiContext);

    return (
        <main className="w-full aligment">
            <div className="w-[1340px] p-0 lgNew:px-[38px] grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-10">
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
