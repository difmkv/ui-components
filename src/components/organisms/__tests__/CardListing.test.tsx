import { CardListing } from "..";
import { render } from "../../utils";
import { cardListingData } from "../../../mocks";

describe("CardListing", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<CardListing cards={cardListingData} />);

    expect(baseElement).toBeTruthy();
  });

  it("should render the correct amount of cards", () => {
    const { container } = render(<CardListing cards={cardListingData} />);

    const cards = container.querySelectorAll("[data-testid=card]");

    expect(cards.length).toBe(cardListingData.length);
  });
});
