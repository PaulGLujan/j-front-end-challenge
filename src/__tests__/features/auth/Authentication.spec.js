import { fireEvent, screen, waitFor } from "@testing-library/react";
import { render } from "../../../utility/testRender";
import { Authentication } from "../../../features/auth/Authentication";

describe("Authentication page", () => {
  it("renders", async () => {
    render(<Authentication />);
    expect(screen.getByRole("heading")).toHaveTextContent("Sign In");
  });

  it("shows error box when sign in fails", async () => {
    render(<Authentication />);
    const button = screen.getByRole("button", { name: "Sign In" });
    fireEvent.click(button);
    await waitFor(() => {
      const errorText = screen.getByText(
        "We're sorry but something went wrong. Please try again."
      );
      expect(errorText).toBeInTheDocument();
    });
  });
});
