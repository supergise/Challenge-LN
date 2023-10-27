import { ApiContext } from "../context/ApiContex";
import { LeftFocal } from "./LeftFocal";

export const CardContainer = () => {
    const { get3Articles } = useContext(ApiContext);

    return (
        <>
            {/* <section className="">
                {articles.map((art) => {
                    return <Card key={art.id} art={art} />;
                })}
            </section> */}
            <LeftFocal arts={get3Articles()} />
            {/* <GridX6 arts ={ getArticles() } /> */}
        </>
    );
};
