import HabitItem from "./HabitItem";

export default function HabitList({ habits, onDelete, onComplete }) {
  return (
    <ul>
      {habits.length > 0 &&
        habits.map((habit) => (
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
