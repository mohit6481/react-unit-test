import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("render post id request succees", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "first post" }],
    });
    render(<Async />);

    // Not suitable as it will make actual api call and create lot of network traffic. So better to MOCK the call like we are doing here
    // findAllByRole will return a promise with default time of 1sec(which is configurable). So it will retry till one second and if data doesnt come till then, it will fail
    const listItemsElements = await screen.findAllByRole("listitem");
    expect(listItemsElements).not.toHaveLength(0);
  });
});
