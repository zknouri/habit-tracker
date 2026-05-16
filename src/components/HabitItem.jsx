export default function HabitItem() {
  return (
    <div className="flex gap-2 justify-between items-center bg-emerald-300 rounded-xl p-4 m-2">
      <p className="text-gray-700 text-xl">Drink 2L of water</p>
      <p className="bg-blue-500 rounded-full p-3 size-12 text-gray-50 text-center">
        0
      </p>
      <button className="bg-green-400 hover:bg-green-500 rounded-full p-2 size-12 cursor-pointer text-gray-50">
        &#10003;
      </button>
      <button className="bg-red-400 hover:bg-red-500 rounded-full p-2 size-12 cursor-pointer text-gray-50">
        &#10008;
      </button>
    </div>
  );
}
