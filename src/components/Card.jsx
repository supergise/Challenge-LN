export const Card = ({
    lead,
    title,
    subtitle,
    marquee,
    image,
    url,
    autor_image,
    type,
}) => {
    if (!type) {
        if (!!image && title.length < 65 && !!lead && !!marquee && !subtitle) {
            type = 1;
        } else if (
            !image &&
            !!lead &&
            !!title &&
            !!subtitle &&
            !!autor_image &&
            !!marquee
        ) {
            type = 2;
        } else if (!image && !!title && !!lead && !!marquee && !!autor_image) {
            type = 3;
        } else if (!!image && !!title && !!lead && !!marquee && !!subtitle) {
            type = 4;
        } else if (
            !!image &&
            title.length > 65 &&
            title.length <= 110 &&
            !!lead &&
            !!marquee &&
            !subtitle
        ) {
            type = 5;
        }
    }

    if (type == 1) {
        return (
            <article className="cardOne col-span-1 row-span-1 hover:opacity-80">
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={title}
                >
                    <img src={image} alt={title} />
                    <div className="py-[8px] px-[16px] md:px-0">
                        <h1 className="pb-[8px] tertiaryTitle gap-1">
                            <span className="text-Blue-LN pr-1">{lead}</span>
                            {title}
                        </h1>

                        <h4 className="marqueeDark">{marquee}</h4>
                    </div>
                </a>
            </article>
        );
    } else if (type == 2) {
        return (
            <article className="cardTwo col-span-1 row-span-1 pb-[16px] hover:opacity-80">
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={title}
                >
                    <h1 className="secondaryTitle">
                        <span className="text-Blue-LN pr-1">{lead}</span>
                        {title}
                    </h1>

                    <p className="leading-6">{subtitle}</p>
                    <div className="flex gap-[8px]">
                        <img
                            className="w-[24px] h-[24px] rounded-full"
                            src={autor_image}
                            alt={marquee}
                        />
                        <h4 className="marqueeDark">{marquee}</h4>
                    </div>
                </a>
            </article>
        );
    } else if (type == 3) {
        return (
            <article className="cardThree col-span-1 row-span-1 h-[330px] pb-[16px] px-4 hover:opacity-80">
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={title}
                >
                    <div className="w-full h-[240px] md:h-[268] flex items-center border py-4">
                        <div>
                            <span>
                                <h1 className="cuaternaryTitle text-center py-2 px-[16px] md:px-0">
                                    <span className="text-Blue-LN  pr-1">
                                        {lead}
                                    </span>
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
                            <h4 className="marqueeDark text-center">
                                {marquee}
                            </h4>
                        </div>
                    </div>
                </a>
            </article>
        );
    } else if (type == 4) {
        return (
            <article className="cardFour hover:opacity-80">
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={title}
                >
                    <div className="flex flex-col-reverse md:flex-col">
                        <div>
                            <h1 className="secondaryTitle py-2 px-[16px] lg:px-0">
                                <span className="text-Blue-LN pr-2">
                                    {lead}
                                </span>
                                {title}
                            </h1>
                            <p className="subTitle py-1 px-[16px] lg:px-0">{subtitle}</p>
                            <h4 className="marqueeDark py-2 px-[16px] lg:px-0">{marquee}</h4>
                        </div>
                        <img src={image} alt={title} />
                    </div>
                </a>
            </article>
        );
    } else if (type == 5) {
        return (
            <article className="cardFive col-span-1 row-span-1 hover:opacity-80">
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={title}
                >
                    <img src={image} alt={title} />
                    <div className="py-2 px-[16px] md:px-0">
                        <h1 className="pb-[8px] tertiaryTitle gap-1">
                            <span className="text-Blue-LN pr-1">{lead}</span>
                            {title}
                        </h1>

                        <h4 className="marqueeDark">{marquee}</h4>
                    </div>
                </a>
            </article>
        );
    }
};
