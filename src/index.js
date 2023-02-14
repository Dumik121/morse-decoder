const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decodeLetter(code) {
  if (code.includes("*")) return " ";
  let morse = "";
  for (let i = 0; i < 10; i += 2) {
    if (code[i] + code[i + 1] == "11") morse += "-";
    if (code[i] + code[i + 1] == "10") morse += ".";
  }
  return MORSE_TABLE[morse];
}

function decode(expr) {
  let word = "";
  let k = 0;
  do {
    word += decodeLetter(expr.slice(k, k + 10));
    k += 10;
  } while (expr.length != k);
  return word;
}

module.exports = {
    decode
}