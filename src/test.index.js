import { checkHealth } from "../src/index.js";

test("checkHealth test", () => {
  expect(checkHealth({ name: "Маг", health: 90 })).toBe("healthy");
  expect(checkHealth({ name: "Маг", health: 20 })).toBe("wounded");
  expect(checkHealth({ name: "Маг", health: 10 })).toBe("critical");
});
