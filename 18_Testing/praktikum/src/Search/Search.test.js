import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "./Search";
import axios from "axios";

jest.mock("axios");

describe("Search", () => {
  test("success fetching data from API and display them", async () => {
    render(<Search />);
    const stories = [
      { objectID: "1", title: "Hello" },
      { objectID: "2", title: "React" },
    ];

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: { hits: stories } })
    );

    await act(async () => {
      await userEvent.click(screen.getByRole("button"));
    });

    const listItem = await screen.findAllByRole("listitem");

    expect(listItem).toHaveLength(2);
  });
  test("failed to fetching data from API", async () => {
    render(<Search />);
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()));

    await userEvent.click(screen.getByRole("button"));

    const items = await screen.findByText("Ada yang error ...");

    expect(items).toBeInTheDocument();
  });
});
