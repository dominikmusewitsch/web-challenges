import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

test("renders a label and an input with the correct attributes", () => {
  render(
    <Input
      labelText="Name of game"
      name="nameOfGame"
      placeholder="e.g. Dodelido"
      value=""
      onChange={() => {}}
      required
    />
  );

  const input = screen.getByLabelText("Name of game");

  expect(input).toBeInTheDocument();
  expect(input).toHaveAttribute("name", "nameOfGame");
  expect(input).toHaveAttribute("placeholder", "e.g. Dodelido");
  expect(input).toHaveAttribute("required");
});

test("calls callback on every user input", async () => {
  const handleChange = jest.fn();

  render(
    <Input
      labelText="Name of game"
      name="nameOfGame"
      placeholder="e.g. Dodelido"
      value=""
      onChange={handleChange}
      required
    />
  );

  const input = screen.getByLabelText("Name of game");
  const user = userEvent.setup();

  await user.type(input, "Dodelido123");

  expect(handleChange).toHaveBeenCalledTimes(11);
});
