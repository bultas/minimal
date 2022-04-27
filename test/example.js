import { equal } from "assert";
import { hello } from "../modules/hello.js";

describe("Example Module", function () {
  it("Hello function", function () {
    equal(hello("World"), "Hello World");
  });
});
