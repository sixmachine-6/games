import { useEffect, useState } from "react";
import GuessBox from "../components/GuessBox";
import HangmanCanvas from "../components/HangmanCanvas";
import Keyboard from "../components/Keyboard";
import GameStatus from "../components/GameStatus";
import { generate } from "random-words";

export default function Hangman() {
  const [word, setWord] = useState<string>("");
  const [guessLetters, setGuessLetters] = useState<string[]>([]);
  const [inCorrectGuess, setInCorrectGuess] = useState<number>(0);

  useEffect(function () {
    const randomWord = generate({ maxLength: 5 });
    if (typeof randomWord === "string") setWord(randomWord.toUpperCase());
  }, []);

  function handleLetter(letter: string) {
    if (!word.includes(letter)) {
      setInCorrectGuess(inCorrectGuess + 1);
    }
    setGuessLetters([...guessLetters, letter]);
  }

  function tryAgain() {
    const randomWord = generate({ maxLength: 5 });
    if (typeof randomWord === "string") setWord(randomWord.toUpperCase());
    setGuessLetters([]);
    setInCorrectGuess(0);
  }

  return (
    <div className=" flex flex-col gap-2 h-screen bg-emerald-100">
      <h2 className="font-bold text-4xl text-center pt-4 tracking-widest text-slate-700">
        HANGMAN
      </h2>
      <HangmanCanvas inCorrectGuess={inCorrectGuess} />
      <GuessBox word={word} guessLetters={guessLetters} />
      <Keyboard
        word={word}
        handleLetter={handleLetter}
        guessLetters={guessLetters}
      />

      {word.split("").every((letter) => guessLetters.includes(letter)) && (
        <GameStatus tryAgain={tryAgain} status="You Won" message="Play Again" />
      )}
      {inCorrectGuess === 7 && (
        <GameStatus tryAgain={tryAgain} status="You Lost" message="Try Again" />
      )}
    </div>
  );
}
