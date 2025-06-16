const data = 3;

switch (typeof data) {
  case "undefined":
    console.log("undefined!");
    break;
  case "number":
    if (isNaN(data)) {
      // isNaN(data) ist eine eingebaute Funktion in JavaScript, die true zurückgibt, wenn data kein gültiger Wert ist (z. B. NaN).
      console.log("not a number!");
    } else {
      console.log("number!");
    }
    break;
  case "string":
    console.log("string!");
    break;
  case "boolean":
    console.log("boolean!");
    break;
  case "function":
    console.log("function!");
    break;
  case "object":
    // null und array werden ebenfalls als object ausgespielt
    if (data === null) {
      console.log("null!");
    } else if (Array.isArray(data)) {
      // Array.isArray(data) = ergibt true, wenn es ein Array ist
      console.log("array!");
    } else {
      console.log("object!");
    }
    break;
  default:
    console.log("I have no idea!");
    break;
}

// hätte auch wiefolgt aussehen können:

if (typeof data === "undefined") {
  console.log("undefined!");
} else if (isNaN(data)) {
  // der einzige Weg, sicher zu prüfen, ob ein Wert NaN ist, mit der Funktion isNaN(data) oder besser: Number.isNaN(data)
  console.log("not a number!");
} else if (typeof data === "number") {
  console.log("number!");
} else if (typeof data === "string") {
  console.log("string!");
} else if (typeof data === "boolean") {
  console.log("boolean!");
} else if (typeof data === "function") {
  console.log("function!");
} else if (data === null) {
  console.log("null!");
} else if (Array.isArray(data)) {
  // Wenn du wissen willst, ob etwas ein Array ist, immer Array.isArray() benutzen!
  console.log("array!");
} else if (typeof data === "object") {
  console.log("object!");
} else {
  console.log("I have no idea!");
}
