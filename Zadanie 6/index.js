// === Instructions: Reverse String ===

function solution(str) {
  if (typeof str === "string") {
    return str
      .split("")
      .reverse()
      .join("");
  } else {
    return Error("wrong type");
  }
}

const reverse = solution("another");

console.log(reverse);
