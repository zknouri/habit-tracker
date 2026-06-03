export default function AddHabitForm({ onAdd, onClose }) {
  function addHabitHandler(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const habitName = formData.get("habit");

    const nextCheck = Temporal.Now.plainDateISO().add({ days: 1 }).toString();

    if (habitName.trim() !== "") {
      onAdd((prevHabits) => {
        const updatedHabits = [
          ...prevHabits,
          {
            id: crypto.randomUUID(),
            name: habitName,
            isCompletedToday: false,
            streakCount: 0,
            nextCheck,
          },
        ];

        localStorage.setItem("habits", JSON.stringify(updatedHabits));

        onClose();

        return updatedHabits;
      });
    }
  }

  return (
    <form
      onSubmit={addHabitHandler}
      className="absolute block w-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-300/80 rounded-xl p-4  shadow-2xl shadow-emerald-300 animate-fade-in"
    >
      <h2 className="text-gray-700 dark:text-gray-50 cursor-text text-3xl pb-4 text-center font-bold">
        Add New Habit
      </h2>
      <div className="flex gap-2 mb-4">
        <input
          className="bg-gray-50 dark:bg-gray-600 dark:text-gray-50 rounded-md w-full p-1"
          type="text"
          id="habit"
          name="habit"
          placeholder="Habit name"
          maxLength="50"
        />
      </div>
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          className="bg-red-400 hover:bg-red-500 rounded-xl w-16 p-2 cursor-pointer dark:text-gray-50 text-gray-700"
        >
          Cancel
        </button>
        <button className="bg-blue-400 hover:bg-blue-500 rounded-xl w-16 p-2 cursor-pointer dark:text-gray-50 text-gray-700">
          Add
        </button>
      </div>
    </form>
  );
}
