export default function Button({
  word,
  letter,
  handleLetter,
  guessLetters,
}: {
  word: string;
  letter: string;
  handleLetter: (letter: string) => void;
  guessLetters: string[];
}) {
  return (
    <button
      className={`${
        guessLetters.includes(letter) && word.includes(letter)
          ? "bg-green-400 text-2xl font-bold text-black px-2 mx-1  rounded-lg"
          : `${
              guessLetters.includes(letter)
                ? "bg-red-400 text-2xl font-bold text-black px-2 mx-1 rounded-lg"
                : "text-2xl font-bold text-black px-2 mx-1 rounded-lg"
            }`
      }
      }`}
      onClick={() => handleLetter(letter)}
      disabled={guessLetters.includes(letter)}
    >
      {letter}
    </button>
  );
}
