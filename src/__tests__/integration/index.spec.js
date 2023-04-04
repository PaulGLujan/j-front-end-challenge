import { fireEvent, screen, waitFor } from "@testing-library/react";
import { render } from "../../utility/testRender";
import App from "../../App";

describe.only("Authentication page", () => {
  it("renders", async () => {
    // const { debug } = render(<App />);
    render(<App />);
    expect(screen.getByRole("heading")).toHaveTextContent("Sign In");
    const usernameInput = screen.getByTestId("username");
    fireEvent.change(usernameInput, {
      target: { value: "testuser@joro.tech" },
    });
    const passwordInput = screen.getByTestId("password");
    fireEvent.change(passwordInput, { target: { value: "mockUserPassword" } });
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
      expect(screen.getAllByRole("button", { name: "Loading" })).toHaveLength(1);
    });
    await waitFor(() => {
      expect(screen.getAllByRole("button", { name: "Unjoin" })).toHaveLength(1);
    });
    // debug();

  });
});
