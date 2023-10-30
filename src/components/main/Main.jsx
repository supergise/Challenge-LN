import { AnexoUno } from "../ads/AnexoUno";
import { CardFullScreen } from "../grid/CardFullScreen";
import { DeskHome } from "./DeskHome";
import { Advertisement } from "../ads/Advertisement";

export const Main = () => {
    return (
        <div>
            <AnexoUno />
            <Advertisement />
            <CardFullScreen />
            <DeskHome />
        </div>
    );
};