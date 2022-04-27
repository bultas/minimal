import { equal } from "assert";
import { bye, hello } from "./index.js";

describe("Hello Module", function () {
  it("Hello function", function () {
    equal(hello("World"), "Hello World");
  });

  it("Bye function", function () {
    equal(bye({ name: "World" }), "Bye World");
  });
});
