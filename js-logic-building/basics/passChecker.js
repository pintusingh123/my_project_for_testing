//write a program to check if a given pass is strong or not
//rules for strong pass : minum 8 char , at least one uppercase , at least one lowercase , at least one num , at least one special char (!@)
//pintU@12 = strong pass
function isstrongPass(pass) {
  if (pass.length < 8) {
    return "please enter a pass with minumum 8 char";
  }
  let Upper = false;
  let Lower = false;
  let Num = false;
  let Special = false;
  for (let i = 0; i < pass.length; i++) {
    let char = pass[i];
    if (char >= "A" && char <= "Z") Upper = true;
    if (char >= "a" && char <= "z") Lower = true;
    if (char >= "0" && char <= "9") Num = true;
    if (char === "!" || char === "@") Special = true;
  }
    if (Upper && Lower && Num && Special) {
      return "pass is strong";
    } else {
      return "pass is not strong";
    }
}
console.log(isstrongPass("User@123"));
