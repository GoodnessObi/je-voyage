import { getCountryCode } from "../src/client/js/countryHandler"
   
describe("Testing the getCountryCode functionality", () => {  
  test("getCountryCode function exists", () => {
    expect(getCountryCode).toBeDefined();
  })

  // test("country input", () => {
  //   const country = 'Nigeria'
  //   expect(getCountryCode(country)).toHaveLastReturnedWith('NG');
  // })
});
