// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

export function reverseWords(str: string): string {
    let words: Array<string> = str.split(" ");

    let reverseWords: Array<string> = words.map((word) => {
        let charArray: Array<string> = word.split("");
        charArray.reverse();
        let reversed: string = charArray.join("");
        return reversed;
    })
    return reverseWords.join(" ");
  }

