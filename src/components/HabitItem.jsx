export default function HabitItem({ habit, onDelete, onComplete }) {
  return (
    <li className="flex gap-2 justify-between items-center bg-emerald-300/80 rounded-xl p-4 m-2 text-primary dark:text-dark-primary animate-fade-in ">
      <p className=" text-xl w-[40%]">{habit.name}</p>
      <div className="text-center">
        <p>Streaks</p>
        <div className="bg-blue-400 rounded-full p-3 size-12 shadow-gray-950 shadow-xs">
          <p>{habit.streakCount}</p>
        </div>
      </div>

      {habit.isCompletedToday && (
        <div className="text-center">
          <p>Completed</p>
          <button className="bg-green-500 rounded-full size-12 shadow-gray-950 shadow-xs">
            &#10003;
          </button>
        </div>
      )}
      {!habit.isCompletedToday && (
        <div className="text-center">
          <p>Uncomplete</p>
          <button
            onClick={() => onComplete(habit.id)}
            className="bg-purple-400 hover:bg-purple-500 rounded-full shadow-gray-950 shadow-xs  size-12 cursor-pointer "
          >
            &#10010;
          </button>
        </div>
      )}

      <div className="text-center">
        <p>Delete</p>
        <button
          onClick={() => onDelete(habit.id)}
          className="bg-red-400 hover:bg-red-500 rounded-full p-2 size-12 cursor-pointer shadow-gray-950 shadow-xs "
        >
          &#10008;
        </button>
      </div>
    </li>
  );
}
