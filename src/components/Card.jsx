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
                    <div className="py-[8px]">
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
            <article className="cardThree col-span-1 row-span-1 h-[330px] pb-[16px] hover:opacity-80">
                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={title}
                >
                    <div className="w-[280px] h-[268] flex-box border px-4 py-4">
                        <span>
                            <h1 className="cuaternaryTitle mb-2 text-center">
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
                        <h4 className="marqueeDark text-center">{marquee}</h4>
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
                    <h1 className="secondaryTitle mb-2">
                        <span className="text-Blue-LN pr-2">{lead}</span>
                        {title}
                    </h1>
                    <p className="mb-2 subTitle">{subtitle}</p>
                    <h4 className="marqueeDark mb-4">{marquee}</h4>

                    <img src={image} alt={title} />
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
                    <div className="py-[8px]">
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
