import Button from "../ui/Button";

const letters = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

export default function Keyboard({
  word,
  handleLetter,
  guessLetters,
}: {
  word: string;
  guessLetters: string[];
  handleLetter: (letter: string) => void;
}) {
  return (
    <div className="flex gap-2 justify-center flex-wrap p-4">
      {letters.map((letter, i) => (
        <Button
          key={i}
          word={word}
          handleLetter={handleLetter}
          letter={letter}
          guessLetters={guessLetters}
        />
      ))}
    </div>
  );
}
