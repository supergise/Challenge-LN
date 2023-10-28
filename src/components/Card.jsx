export const Card = ({
    lead,
    title,
    subtitle,
    marquee,
    image,
    url,
    autor_image,
}) => {
    return (
        <div>
            {/* // arreglar pb por gap row */}
            <article className="cardOne col-span-1 row-span-1">
                <img src={image} alt={title} />
                <div className="py-[8px]">
                    <h1 className="pb-[8px] font-secondary text-lg leading-[28px] tracking-[-0.2px] gap-1">
                        <span className="text-blue-700 pr-1">{lead}</span>
                        {title}
                    </h1>

                    <h4 className="font-bold text-base">{marquee}</h4>
                </div>
            </article>

            <article className="cardTwo col-span-1 row-span-1 pb-[16px] ">
                <h1 className="font-primary text-[32px] tracking-tight leading-10">
                    <span className="text-blue-700 pr-1">{lead}</span>
                    {title}
                </h1>

                <p className="leading-6">{subtitle}</p>
                <div className="flex gap-[8px]">
                    <img
                        className="w-[24px] h-[24px] rounded-full"
                        src={autor_image}
                        alt={marquee}
                    />
                    <h4 className="font-bold text-base">{marquee}</h4>
                </div>
            </article>

            <article className="cardThree col-span-1 row-span-1 h-[330px] pb-[16px] gap-y-5">
                <div className="w-[280px] h-[268] flex-box border px-4 py-4">
                    <span>
                        <h1 className="font-primary text-[20px] tracking-tight leading-7 mb-2 text-center">
                            <span className="text-blue-700 pr-1">{lead}</span>
                            {title}
                        </h1>
                    </span>
                    <div className="flex justify-center mb-2">
                        <img
                            className="w-[56px] h-[56px] rounded-full"
                            src={autor_image}
                            alt={marquee}
                        />
                    </div>
                    <h4 className="font-bold text-base text-center">
                        {marquee}
                    </h4>
                </div>
            </article>

            <article className="cardFour">
                <h1 className="font-primary text-[32px] tracking-tight leading-10 mb-2">
                    <span>{lead}</span>
                    {title}
                </h1>
                <p className="mb-2 leading-6">{subtitle}</p>
                <h4 className="font-bold mb-4 text-base">{marquee}</h4>

                <img src={image} alt={title} />
            </article>
        </div>
    );
};
