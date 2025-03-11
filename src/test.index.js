const { checkHealth } = require("./index.js");

test("checkHealth test", () => {
  expect(checkHealth(60)).toBe("healthy");
  expect(checkHealth(35)).toBe("wounded");
  expect(checkHealth(10)).toBe("critical");
});
