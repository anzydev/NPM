/**
 * Count Unicode code points in a string.
 *
 * @param {string} text
 * @param {{ ignoreSpaces?: boolean, ignoreWhitespace?: boolean }} [options]
 * @returns {number}
 */
export function countCharacters(text, options = {}) {
  if (typeof text !== "string") {
    throw new TypeError("text must be a string");
  }

  if (options === null || typeof options !== "object" || Array.isArray(options)) {
    throw new TypeError("options must be an object");
  }

  const { ignoreSpaces = false, ignoreWhitespace = false } = options;

  if (typeof ignoreSpaces !== "boolean" || typeof ignoreWhitespace !== "boolean") {
    throw new TypeError("ignoreSpaces and ignoreWhitespace must be booleans");
  }

  return Array.from(text).filter((character) => {
    if (ignoreWhitespace) {
      return !/\s/u.test(character);
    }

    return !ignoreSpaces || character !== " ";
  }).length;
}

export default countCharacters;
