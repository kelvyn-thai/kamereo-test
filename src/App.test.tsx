import { EmailRegex, PhoneRegex } from "./shared/utils";

test("test string is Email", () => {
  // expect(null).toMatch(EmailRegex);
  // expect(undefined).toMatch(EmailRegex);
  // expect("").toMatch(EmailRegex);
  // expect("afadsfdas").toMatch(EmailRegex);
  // expect(123123).toMatch(EmailRegex);
  // expect(32121321321.32).toMatch(EmailRegex);
  expect("fdsafds@gmail.com").toMatch(EmailRegex);
});

test("test string is phone", () => {
  // expect(null).toMatch(PhoneRegex);
  // expect(undefined).toMatch(PhoneRegex);
  // expect(false).toMatch(PhoneRegex);
  // expect("1345678").toMatch(PhoneRegex);
  // expect("").toMatch(PhoneRegex);
  // expect("0.23").toMatch(PhoneRegex);
  expect("0902751467").toMatch(PhoneRegex);
});
