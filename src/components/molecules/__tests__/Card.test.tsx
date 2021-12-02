import { Card } from "..";
import { render } from "../../utils";
import { cardListingData } from "../../../mocks";

describe("Card", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Card {...cardListingData[0]} />);

    expect(baseElement).toBeTruthy();
  });

  it("should have the right image attributes", () => {
    const { getByRole } = render(<Card {...cardListingData[0]} />);

    const imageSrc = getByRole("img").getAttribute("src");
    expect(imageSrc).toBe(cardListingData[0].src);

    const imageAlt = getByRole("img").getAttribute("alt");
    expect(imageAlt).toBe(cardListingData[0].alt);
  });

  it("should have the correct tag", () => {
    const { getByTestId } = render(<Card {...cardListingData[0]} />);

    const tag = getByTestId("card-tag");

    expect(tag.textContent).toBe("Course");
  });

  it("should have call to action link", () => {
    const { container } = render(<Card {...cardListingData[0]} />);

    const ctaLink = container.querySelector("a");

    expect(ctaLink).toBeInTheDocument();
  });

  it("should have correct title Details", () => {
    const { getByTestId } = render(<Card {...cardListingData[0]} />);

    const detailTitle = getByTestId("detail-title");

    expect(detailTitle.textContent).toBe(cardListingData[0].title);
  });

  it("should have correct description Details", () => {
    const { getByTestId } = render(<Card {...cardListingData[0]} />);

    const detailDescription = getByTestId("detail-description");

    expect(detailDescription.textContent).toBe(cardListingData[0].description);
  });

  it("should have correct label Details", () => {
    const { getByTestId } = render(<Card {...cardListingData[0]} />);

    const detailLabel = getByTestId("detail-label");

    expect(detailLabel.textContent).toBe(cardListingData[0].label);
  });
});
