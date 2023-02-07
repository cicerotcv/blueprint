export const generateRandomString = (
  alphabet: string,
  length: number
): string => {
  let string = "";

  for (let i = 0; i < length; i++) {
    const pos = Math.floor(Math.random() * alphabet.length);
    string += alphabet[pos];
  }

  string = string.trim();

  if (string.length < length) return generateRandomString(alphabet, length);

  return string;
};
