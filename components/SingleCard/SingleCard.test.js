import { render, screen } from "@testing-library/react";
import SingleCard from "./SingleCard"

describe("Single Card", () => {
  it("Renders a single card", () => {
    render(<SingleCard
      image="https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254941010-61PJxjjnbfL.jpg"
      title="Spirit Island"
      id="kPDxpJZ8PD"
      />);

    expect(screen.getByAltText('Spirit Island')).toBeInTheDocument()
  });
});
