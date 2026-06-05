import HabitItem from "./HabitItem";

export default function HabitList({ habits, onOpen, onDelete, onComplete }) {
  return;
  {
    habits.length > 0 && (
      <ul className="w-full sm:w-[75%] md:w-[65%] lg:w-[55%] xl:w-[45%]">
        <div className="sticky top-4 m-4">
          <button
            onClick={onOpen}
            className="bg-amber-400/80 hover:bg-amber-500 rounded-xl w-1/3 p-2 cursor-pointer text-primary dark:text-dark-primary text-center text-xl shadow-gray-950 shadow-xs"
          >
            Add Habit
          </button>
        </div>

        {habits.map((habit) => (
          <HabitItem
            habit={habit}
            onDelete={onDelete}
            onComplete={onComplete}
            key={habit.id}
          />
        ))}
      </ul>
    );
  }
}
