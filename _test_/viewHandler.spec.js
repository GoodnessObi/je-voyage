import { updateUI } from "../src/client/js/viewHandler";
import { buildUI } from "../src/client/js/viewHandler";


describe("Testing the viewHandler functionality", () => {  
  test("updateUI function exists", () => {
    expect(updateUI).toBeDefined();
  })

  test("buildUI function exists", () => {
    expect(buildUI).toBeDefined();
  })
});