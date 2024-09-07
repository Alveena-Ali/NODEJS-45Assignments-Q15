"use strict";
// Que 15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a 
// new set of invitations. You’ll have to think of someone else to invite.
Object.defineProperty(exports, "__esModule", { value: true });
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of 
//   the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// **********************************************************************************************************************
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of 
//   the guest who can’t make it.
let Guestlist = ["Zara", "Sheza", "Laiba"];
let absentGuest = "Zara";
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
let newGuest = "Hooria";
Guestlist[0] = newGuest;
// • Print a second set of invitation messages, one for each person who is still in your list.
for (let i = 0; i < Guestlist.length; i++) {
    console.log("Dear" + " " + Guestlist[i] +
        ",\n\nIt is our pleasure to invite you in our dinner party.\n\nThank You!\n\n");
}
;
// Add a print statement at the end of your program stating the name of the guest who can’t make it.
console.log(`Note:
    ${absentGuest} is not coming to the dinner party.\n`);
