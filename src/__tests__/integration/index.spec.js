import { fireEvent, screen, waitFor } from "@testing-library/react";
import { render } from "../../utility/testRender";
import App from "../../App";

const USERNAME = "testuser@joro.tech";
const PASSWORD = "mockUserPassword";

describe.only("Authentication page", () => {
  it("Signs in and Joins Challenge", async () => {
    render(<App />);
    expect(screen.getByRole("heading")).toHaveTextContent("Sign In");
    const usernameInput = screen.getByTestId("username");
    fireEvent.change(usernameInput, {
      target: { value: USERNAME },
    });
    const passwordInput = screen.getByTestId("password");
    fireEvent.change(passwordInput, { target: { value: PASSWORD } });
    const button = screen.getByRole("button", { name: "Sign In" });
    fireEvent.click(button);
    await waitFor(() => {
      const loadingText = screen.getByText("Loading...");
      expect(loadingText).toBeInTheDocument();
    });
    await waitFor(() => {
      const loadingText = screen.getByText("Loading...");
      expect(loadingText).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText("Hi Test")).toBeInTheDocument();
    });

    const firstJoinButton = screen.getAllByRole("button", { name: "Join" })[0];
    fireEvent.click(firstJoinButton);
    await waitFor(() => {
      expect(screen.getAllByRole("button", { name: "Loading" })).toHaveLength(
        1
      );
    });
    await waitFor(() => {
      expect(screen.getAllByRole("button", { name: "Unjoin" })).toHaveLength(1);
    });
  });
});
