import { screen } from "@testing-library/react";
import { render } from "../../../utility/testRender";
import { Challenges } from "../../../features/challenges/Challenges";

describe("Challenges page", () => {
  let mockState;

  beforeAll(() => jest.spyOn(window, "fetch"));

  beforeEach(() => {
    mockState = {
      auth: { loggedIn: true, user: { firstName: "Test" } },
      challenges: { challenges: null },
    };

    window.fetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => ({ challenges: [] }),
    });
  });

  afterEach(() => [(mockState = {})]);

  it("renders loading state", async () => {
    render(<Challenges />, mockState);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders challenge page", async () => {
    mockState = {
      ...mockState,
      challenges: {
        challenges: [
          {
            id: 1,
            name: "Vegan for a Week",
            contentKey: "vegan-week",
            timePeriod: "week",
            category: "food",
          },
          {
            id: 2,
            name: "Vegetarian for a Month",
            contentKey: "vegetarian-month",
            timePeriod: "month",
            category: "food",
          },
          {
            id: 3,
            name: "Pescatarian for a Month",
            contentKey: "pescatarian-month",
            timePeriod: "month",
            category: "food",
          },
          {
            id: 4,
            name: "Power Down for a Month",
            contentKey: "power-down-week",
            timePeriod: "week",
            category: "home",
          },
        ],
      },
    };
    render(<Challenges />, mockState);
    expect(screen.getByText("Hi Test")).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: "Join" })).toHaveLength(4);
  });
});
