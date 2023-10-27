import { AnexoUno } from "./AnexoUno";
import { CardFullScreen } from "./CardFullScreen";
import { DeskHome } from "./DeskHome";
import { Publicidad } from "./Publicidad";

export const Main = () => {
    return (
        <div>
            <AnexoUno />
            <Publicidad />
            <CardFullScreen />
            <DeskHome />
        </div>
    );
};