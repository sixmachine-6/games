export default function GuessBox({
  word,
  guessLetters,
}: {
  word: string;
  guessLetters: string[];
}) {
  return (
    <div className="flex justify-center pb-4">
      {word.split("").map((letter, i) => (
        <div
          className="border-black border-b-4 w-8 h-10 mx-2 text-2xl font-bold text-black text-center"
          key={i}
        >
          {guessLetters.includes(letter) && letter}
        </div>
      ))}
    </div>
  );
}
