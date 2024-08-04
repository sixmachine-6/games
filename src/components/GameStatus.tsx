export default function GameStatus({
  tryAgain,
  status,
  message,
}: {
  tryAgain: () => void;
  status: string;
  message: string;
}) {
  return (
    <div className=" absolute inset-0 flex flex-col items-center justify-center bg-slate-500/20 backdrop-blur-sm">
      <h2 className="text-3xl font-bold uppercase tracking-wide text-white drop-shadow-2xl">
        {status}
      </h2>
      <button
        onClick={tryAgain}
        className="p-2 my-4 font-semibold text-2xl bg-purple-400 rounded-2xl text-white"
      >
        {message}
      </button>
    </div>
  );
}
