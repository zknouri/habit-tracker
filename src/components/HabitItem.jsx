export default function HabitItem({ habit, onDelete, onComplete }) {
  return (
    <li className="flex gap-2 justify-between items-center bg-emerald-300 rounded-xl p-4 m-2 text-gray-700">
      <p className="text-gray-700 text-xl w-48">{habit.name}</p>
      <div className="text-center">
        <p>Streaks</p>
        <div className="bg-blue-500 rounded-full p-3 size-12">
          <p className="text-gray-50 text-center">{habit.streakCount}</p>
        </div>
      </div>

      <div className="text-center">
        <p>Completed</p>
        <button
          onClick={() => onComplete(habit.id)}
          className="bg-green-400 hover:bg-green-500 rounded-full p-2 size-12 cursor-pointer "
        >
          &#10003;
        </button>
      </div>
      <div className="text-center">
        <p>Delete</p>
        <button
          onClick={() => onDelete(habit.id)}
          className="bg-red-400 hover:bg-red-500 rounded-full p-2 size-12 cursor-pointer "
        >
          &#10008;
        </button>
      </div>
    </li>
  );
}
