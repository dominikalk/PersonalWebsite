export const scrambleText = (text: string, scramble: boolean) => {
  if (!scramble) return text;
  let newText: string[] = [];
  text
    .toLowerCase()
    .split("")
    .forEach((char) => {
      if (!char.match(/[a-z]/i)) {
        newText.push(char);
      } else {
        const newChar = String.fromCharCode(
          ((char.charCodeAt(0) - 97 + 13) % 26) + 97
        );
        newText.push(newChar);
      }
    });
  return newText.join("");
};
