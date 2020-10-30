import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar"


describe("NavBar", () => {
  it("Renders title of app", () => {
    render(<NavBar />);

    expect(screen.getByText('House Rules')).toBeInTheDocument()
  });
});
