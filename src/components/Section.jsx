export default function Section({ onOpen }) {
  return (
    <section className="w-full sm:w-[75%] md:w-[65%] lg:w-[55%] xl:w-[45%] flex flex-col justify-center items-center m-4 p-4 text-2xl text-center h-96 bg-amber-300/80 rounded-2xl text-primary font-semibold animate-fade-in">
      <h2 className="text-3xl m-6">
        Start adding your daily habits now and monitor your streaks
      </h2>
      <button
        onClick={onOpen}
        type="button"
        className="bg-emerald-300 hover:bg-emerald-400 m-2 p-2 w-32 rounded-xl cursor-pointer"
      >
        Begin!
      </button>
    </section>
  );
}
