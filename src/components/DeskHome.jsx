import { useContext } from "react";
import { LeftFocal } from "./LeftFocal";
import { ApiContext } from "../context/ApiContex";
import { CardsGridSix } from "./CardsGridSix";

export const DeskHome = () => {

    const { get3Articles } = useContext(ApiContext);

    return (
        <main className="w-full flex justify-center items-center">
            <div className="w-max-[1340px] grid grid-cols-4 gap-[38px] gap-y-[64px]">
                <section className="col-span-3 row-span-1 gap-y-[64px]">
                    <article className="col-span-3 row-span-1 w-[920px] h-[100px] bg-gray-200">
                        cabezal_dsk 920x100
                    </article>

                    <LeftFocal articles={get3Articles}/>

                    <CardsGridSix/>
                </section>

                <aside className="col-span-1 row-span-1 w-[300px] h-[7641] bg-gray-200"></aside>
            </div>
        </main>
    );
};