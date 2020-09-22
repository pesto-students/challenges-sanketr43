import { isString } from "util";

function abbreviateString(str) {
  if (typeof str != "string") {
    throw "Please provide valid string type.";
  } else {
    let splitString = str.trim().split(" ");
    if (splitString.length > 1) {
      return (
        splitString[0] +
        " " +
        splitString[splitString.length - 1].charAt(0).toUpperCase() +
        "."
      );
    }
    return splitString[0];
  }
}

export { abbreviateString };
