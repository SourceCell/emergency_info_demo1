"use stric";

import { getContact, getCopyrightDate, getWho } from "../src/site_info.js";

import { assertEquals } from "https://deno.land/std@0.178.0/testing/asserts.ts";

Deno.test("get who", () => {
  const who = getWho();
  assertEquals(who, "Tech Engineers trying to help fast.");
});

Deno.test("get contact info", () => {
  const contact = getContact();
  assertEquals(contact, "info@sourcecell.com");
});

Deno.test("get copyright date", () => {
  const date = getCopyrightDate();
  assertEquals(date, "Copyright 2023 Tech Engineers");
});
