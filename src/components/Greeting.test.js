import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // nothing in this case

    // Assert
    const hellowWorldElement = screen.getByText("Hello World", {
      exact: false,
    });
    expect(hellowWorldElement).toBeInTheDocument();
  });

  test("check text when button was not clicked", () => {
    render(<Greeting />);

    const hellowWorldElement = screen.getByText("It's good to see you", {
      exact: false,
    });
    expect(hellowWorldElement).toBeInTheDocument();
  });

  test("check text when button is clicked", () => {
    render(<Greeting />);

    userEvent.click(screen.getByRole("button"));

    const hellowWorldElement = screen.getByText("Changed", {
      exact: false,
    });
    expect(hellowWorldElement).toBeInTheDocument();
  });

  test("check text which shouldnt be there when button is clicked", () => {
    render(<Greeting />);

    userEvent.click(screen.getByRole("button"));
    
    const hellowWorldElement = screen.queryByText("It's good to see you", {
      exact: false,
    });
    expect(hellowWorldElement).toBeNull();
  });
});
