export default function AddHabitForm({ onAdd }) {
  function addHabitHandler(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const habitName = formData.get("habit");

    const habitNextCheck = Temporal.Now.plainDateISO()
      .add({ days: 1 })
      .toString();

    if (habitName.trim() !== "") {
      onAdd((prevHabits) => {
        const updatedHabits = [
          ...prevHabits,
          {
            id: crypto.randomUUID(),
            name: habitName,
            isCompletedToday: false,
            streakCount: 0,
            habitNextCheck,
          },
        ];

        localStorage.setItem("habits", JSON.stringify(updatedHabits));

        return updatedHabits;
      });
    }
  }

  return (
    <form
      onSubmit={addHabitHandler}
      className="bg-emerald-300 rounded-xl p-4 m-2"
    >
      <div className="flex gap-2 mb-4">
        <label className="w-29 text-gray-700 cursor-text" htmlFor="habit">
          Habit Name:
        </label>
        <input
          className="bg-gray-50 rounded-xl w-full"
          type="text"
          id="habit"
          name="habit"
          maxLength="50"
        />
      </div>
      <div className="flex justify-end gap-2">
        <button className="bg-red-400 hover:bg-red-500 rounded-xl w-16 p-2 cursor-pointer text-gray-50">
          Cancel
        </button>
        <button className="bg-blue-400 hover:bg-blue-500 rounded-xl w-16 p-2 cursor-pointer text-gray-50">
          Add
        </button>
      </div>
    </form>
  );
}
