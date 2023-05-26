import { describe, it, expect, vi } from "vitest";

import { generateReportData } from "./data";

describe("generateReportData()", () => {
  it("calls the function passed as an argument", () => {
    // spy:
    const logger = vi.fn();

    generateReportData(logger);

    expect(logger).toHaveBeenCalled();
  });
});
