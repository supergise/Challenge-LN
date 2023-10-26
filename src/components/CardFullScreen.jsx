export const CardFullScreen = () => {
    return (
            <section
                className="w-full h-[768px] image flex com-image bg-no-repeat bg-cover"
                style={{
                    backgroundImage:
                        'url("https://www.lanacion.com.ar/resizer/v2/los-investigadores-creen-haber-identificado-el-24WB4T22WFD5LFJRNRSTKCMKZU.jpg?auth=cee7520fe82bddbcd4ff08137c59decb0f6b1876be9a6faa5b3e253c3003a870&width=420&height=280&quality=70&smart=true")',
                }}
            >
                <div className="w-full mt-[528px] bg-gradient-to-t from-black to-transparent">
                    <article className="h-[240px] w-full flex flex-col justify-center items-start mx-auto max-w-[1280px]">
                        <span className="px-2 py-1 mb-2 rounded-2xl bg-black text-white uppercase text-[11px]">
                            Badge
                        </span>
                        <h1 className="font-primary text-5xl text-white tracking-tighter leading-[56px] text-start">
                            Lead. Title esto es un titulo de la novedad con unas
                            cuantas lineas que ocupar
                        </h1>
                        <h4 className="font-bold text-sm text-center text-white">
                            Author / Marquee
                        </h4>
                    </article>
                </div>
            </section>
    );
};

{
    /* <img
className="w-full max-h-[768px] image flex com-image"
decoding="async"
fetchpriority="high"
loading="eager"
src="https://www.lanacion.com.ar/resizer/v2/los-investigadores-creen-haber-identificado-el-24WB4T22WFD5LFJRNRSTKCMKZU.jpg?auth=cee7520fe82bddbcd4ff08137c59decb0f6b1876be9a6faa5b3e253c3003a870&amp;width=420&amp;height=280&amp;quality=70&amp;smart=true"
width="768"
alt="Los investigadores creen haber identificado el 89% de todas las mutaciones clave"
> */
}
