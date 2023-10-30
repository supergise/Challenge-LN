import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LeftFocal } from "../../../src/components/grid/LeftFocal";

test("should handle click events on articles", () => {
    const articles = [
        {
            id: "001",
            lead: "Lead1",
            title: "Este es el lugar que ocuparía un Title1 con varias palabras",
            marquee: "Nombre y apellido1",
            image: "https://example.com/image.jpg",
            url: "https://example.com/nota0.html",
        },
        {
            id: "002",
            lead: "Lead2",
            title: "Este es el lugar que ocuparía un Title2 con varias palabras",
            marquee: "Nombre y apellido2",
            image: "https://example.com/image.jpg",
            url: "https://example.com/nota1.html",
        },
        {
            id: "003",
            lead: "Lead3",
            title: "Este es el lugar que ocuparía un Title3 con varias palabras",
            marquee: "Nombre y apellido3",
            image: "https://example.com/image.jpg",
            url: "https://example.com/nota2.html",
        },
    ];

    const getArticles = (quantity) => {
        if (quantity > articles.length) {
            return articles.splice(0);
        } else {
            return articles.splice(0, quantity);
        }
    };

    const { container } = render(<LeftFocal articles={getArticles} />);

    const articleElements = container.querySelectorAll("a");
    articleElements.forEach((article, index) => {
        console.log(article);
        expect(article).toHaveAttribute(
            "href",
            "https://example.com/nota" + index + ".html"
        );
    });
});