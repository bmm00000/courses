import { describe, it, expect, vi } from "vitest";

import { generateReportData } from "./data";

describe("generateReportData()", () => {
  it("calls the function passed as an argument", () => {
    // spy:
    const logger = vi.fn();

    // logger.mockImplementation(() => {})
    // logger.mockImplementationOnce(() => {})
    // with mockImplementationOnce, after the implementation is used, it goes back to what it was.

    generateReportData(logger);

    expect(logger).toHaveBeenCalled();
    // expect(logger).toHaveBeenCalledOnce()
    // expect(logger).toHaveBeenCalledWith(xxx)
  });
});
