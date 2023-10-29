import { useContext } from "react";
import { LeftFocal } from "./LeftFocal";
import { ApiContext } from "../context/ApiContex";
import { CardsGridTwo } from "./CardsGridTwo";
import { CardsGridSix } from "./CardsGridSix";

export const DeskHome = () => {
    const { getArticles } = useContext(ApiContext);

    return (
        <main className="w-full aligment">
            <div className="w-max-[1340px] grid grid-cols-4 gap-8">
                <section className="col-span-3 row-span-1">
                    <article className="col-span-3 row-span-1 w-[920px] h-[100px] mb-16 bg-gray-100">
                        cabezal_dsk 920x100
                    </article>

                    <LeftFocal articles={getArticles} />

                    <CardsGridSix articles={getArticles} />

                    {/* <CardsGridTwo articles={get3Articles} /> */}
                </section>

                <aside className="col-span-1 row-span-1 w-[300px] h-[7641] bg-gray-100"></aside>
            </div>
        </main>
    );
};