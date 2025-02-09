import { User } from "./models";

export const users: User[] = [
  {
    id: 1,
    fullName: 'James Sunderland',
    emailAddress: 'james.sunderland@acme.corp',
    address: '11 Katz St., Pennsylvania, Centralia, M4A2T6 ',
  },
  {
    id: 2,
    fullName: 'Heather Mayson',
    emailAddress: 'h.mayson@acme.corp',
    address: '24 Lindsey St., British Columbia, Vancouver, N9M2...',
  },
  {
    id: 3,
    fullName: 'Henry Townsend',
    emailAddress: 'henry_townsend@acme.corp',
    address: '10 Rendell St., Ontario, Toronto, M2K3B8 ',
  },
  {
    id: 4,
    fullName: 'Walter Sullivan',
    emailAddress: 'walter.s@acme.corp',
    address: '9 Wiltse Road, Alberta, Canmore, N9W4H9 ',
  },
];

export function getUsers() {
  return users;
}