/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function commonPrefix(words: string[]) {
  if (words.length === 0) return ""
  let prefix = words[0]

  for (let i = 0; i < words.length; i++) {
    while (!words[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1)
    }
  }

  return prefix
}

console.log(commonPrefix(words));
