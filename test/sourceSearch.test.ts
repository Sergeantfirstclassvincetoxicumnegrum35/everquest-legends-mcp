import { beforeEach, describe, expect, it, vi } from "vitest";
import { fetchText } from "../src/http.js";
import { searchCuratedSources } from "../src/sourceSearch.js";

vi.mock("../src/http.js", () => ({
  fetchText: vi.fn()
}));

const mockedFetchText = vi.mocked(fetchText);

describe("curated source search", () => {
  beforeEach(() => {
    mockedFetchText.mockReset();
  });

  it("returns matches and failed source metadata", async () => {
    mockedFetchText.mockImplementation(async (url) => {
      if (url === "https://www.everquestlegends.com/home") {
        return "<main><h1>EverQuest Legends</h1><p>Beta launch source text.</p></main>";
      }
      throw new Error("blocked by fixture");
    });

    const search = await searchCuratedSources("beta", {
      sourceIds: ["official-home", "official-shop"],
      limit: 5
    });

    expect(search.results.map((result) => result.id)).toEqual(["official-home"]);
    expect(search.failedSources).toEqual([
      {
        id: "official-shop",
        title: "Official EverQuest Legends Shop",
        url: "https://www.everquestlegends.com/shop",
        reason: "blocked by fixture"
      }
    ]);
  });

  it("rejects overlong queries before fetching", async () => {
    await expect(searchCuratedSources("x".repeat(121), { sourceIds: ["official-home"] })).rejects.toThrow(/120 characters/);
    expect(mockedFetchText).not.toHaveBeenCalled();
  });
});
