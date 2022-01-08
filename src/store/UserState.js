import { atom } from "recoil";

export const UserState = atom({
  key: "useState",
  default: { isAdmin: false }
});
