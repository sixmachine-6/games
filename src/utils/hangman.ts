export function drawLeftLegWithEyes(context: CanvasRenderingContext2D) {
  context.fillStyle = "#000000";
  context.moveTo(204, 190);
  context.lineTo(176, 230);
  context.stroke();

  context.beginPath();
  context.arc(195, 100, 4, 0, 360);
  context.fillStyle = "#000000";
  context.fill();
  context.beginPath();
  context.arc(212, 100, 4, 0, 360);
  context.fillStyle = "#000000";
  context.fill();
}

export function drawRightLeg(context: CanvasRenderingContext2D) {
  context.fillStyle = "#000000";
  context.moveTo(202, 190);
  context.lineTo(230, 230);
  context.stroke();
}

export function drawLeftHand(context: CanvasRenderingContext2D) {
  context.fillStyle = "#000000";
  context.moveTo(201, 150);
  context.lineTo(156, 120);
  context.stroke();
}

export function drawRightHand(context: CanvasRenderingContext2D) {
  context.fillStyle = "#000000";
  context.moveTo(205, 150);
  context.lineTo(250, 120);
  context.stroke();
}

export function drawBody(context: CanvasRenderingContext2D) {
  context.fillStyle = "#000000";
  context.fillRect(200, 127, 7, 70);
}

export function drawHead(context: CanvasRenderingContext2D) {
  context.beginPath();
  context.arc(204, 102, 23, 0, 360);
  context.strokeStyle = "#000000";
  context.lineWidth = 5;
  context.stroke();
}

export function drawRope(context: CanvasRenderingContext2D) {
  context.fillStyle = "#000000";
  context.fillRect(200, 25, 7, 55);
}

export function drawPole(
  context: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement
) {
  context.fillStyle = "#ff8c1f";
  context.fillRect(0, 280, canvas.width, 20);

  context.fillStyle = "#da001d";
  context.fillRect(50, 30, 20, canvas.height - 50);

  context.fillStyle = "#f84b22";
  context.fillRect(50, 30, canvas.width - 100, 20);
}
