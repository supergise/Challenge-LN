import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Card } from "../../../src/components/card/Card";

describe("test for <Card/>", () => {
    test("Render a card type one", () => {
        const mockArticle = {
            id: "001",
            lead: "Lead",
            title: "Este es el lugar que ocuparía un Title con varias palabras",
            marquee: "Nombre y apellido",
            image: "https://example.com/image.jpg",
        };

        const { container } = render(
            <Card key={mockArticle.id} {...mockArticle} />
        );

        const sampleLead = screen.getByText(/Lead/i);
        const sampleTitle = screen.getByText(
            /Este es el lugar que ocuparía un Title con varias palabras/i
        );
        const sampleMarquee = screen.getByText(/Nombre y apellido/i);

        expect(sampleLead).toBeInTheDocument();
        expect(sampleTitle).toBeInTheDocument();
        expect(sampleMarquee).toBeInTheDocument();

        expect(container.querySelector(".cardOne")).toBeTruthy();
        expect(container.querySelector("img")).toBeTruthy();
        expect(container.querySelector("img")).toHaveAttribute(
            "src",
            "https://example.com/image.jpg"
        );
        expect(container.querySelector("h1").textContent).toBe(
            "LeadEste es el lugar que ocuparía un Title con varias palabras"
        );
    });
});