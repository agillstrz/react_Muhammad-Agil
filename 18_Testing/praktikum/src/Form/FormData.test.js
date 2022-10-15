import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FormData from "./FormData";

describe("FormDatas", () => {
  test("renders FormData", () => {
    render(<FormData />);
    expect(
      screen.getByText("Pendaftaran Peserta Coding Bootcamp")
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Nama Lengkap:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/)).toBeInTheDocument();
    expect(screen.getByLabelText(/No Handphone:/)).toBeInTheDocument();
  });

  test("renders input Form", () => {
    render(<FormData />);
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "test" },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "test@gmail.com" },
    });

    fireEvent.input(screen.getByRole("spinbutton", { name: /no Handphone/i }), {
      target: { value: 1234567890 },
    });

    expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("test");
    expect(screen.getByLabelText(/Email:/)).toHaveValue("test@gmail.com");
    expect(screen.getByLabelText(/No Handphone:/)).toHaveValue(1234567890);
  });

  test("renders submit", () => {
    render(<FormData />);
    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "test" },
    });
    expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("test");
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    const alertSuccess = jest.spyOn(window, "alert").mockImplementation();
    // Button Clicked
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));
    // Expect alert
    expect(alertSuccess).toHaveBeenCalledTimes(1);
  });
});
