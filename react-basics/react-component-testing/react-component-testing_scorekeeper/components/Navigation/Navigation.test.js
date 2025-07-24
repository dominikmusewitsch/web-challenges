import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation />);
  const link = screen.getByRole("link", { name: "Play" });
  expect(link).toBeInTheDocument();
  const link2 = screen.getByRole("link", { name: "History" });
  expect(link2).toBeInTheDocument();
});
