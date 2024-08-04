import { useEffect, useRef } from "react";
import {
  drawBody,
  drawHead,
  drawLeftHand,
  drawLeftLegWithEyes,
  drawPole,
  drawRightHand,
  drawRightLeg,
  drawRope,
} from "../utils/hangman";

export default function HangmanCanvas({
  inCorrectGuess,
}: {
  inCorrectGuess: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(
    function () {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const context = canvas.getContext("2d");
      if (!context) return;
      if (inCorrectGuess === 0)
        context.clearRect(0, 0, canvas.width, canvas.height);
      drawPole(context, canvas);
      if (inCorrectGuess > 0) drawRope(context);
      if (inCorrectGuess > 1) drawHead(context);
      if (inCorrectGuess > 2) drawBody(context);
      if (inCorrectGuess > 3) drawRightHand(context);
      if (inCorrectGuess > 4) drawLeftHand(context);
      if (inCorrectGuess > 5) drawRightLeg(context);
      if (inCorrectGuess > 6) drawLeftLegWithEyes(context);
    },
    [inCorrectGuess]
  );
  return (
    <canvas
      ref={canvasRef}
      className="mx-auto py-4"
      id="hangman-canvas"
      width="300"
      height="300"
    >
      HangmanCanvas
    </canvas>
  );
}
