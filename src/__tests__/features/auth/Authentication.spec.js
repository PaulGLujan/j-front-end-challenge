import { screen } from "@testing-library/react";
import { render } from "../../../utility/testRender";
import { Authentication } from "../../../features/auth/Authentication";

describe("Authentication page", () => {
  it("renders", async () => {
    render(<Authentication />);
    expect(screen.getByRole("heading")).toHaveTextContent("Sign In");
  });
});
