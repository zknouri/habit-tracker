import { useState } from "react";

import Header from "./components/Header.jsx";
import AddHabitForm from "./components/AddHabitForm.jsx";
import HabitList from "./components/HabitList.jsx";

function App() {
  const [habits, setHabits] = useState([]);

  function habitDeleteHandler(id) {
    setHabits((prevHabits) => {
      return prevHabits.filter((habit) => habit.id !== id);
    });
  }

  function completedHabitHandler(id) {
    setHabits((prevHabits) => {
      return [
        ...prevHabits.map((habit) =>
          habit.id === id
            ? {
                ...habit,
                isCompletedToday: true,
                streakCount: habit.streakCount++,
              }
            : habit,
        ),
      ];
    });
  }

  console.log(habits);

  return (
    <>
      <Header />
      <main>
        <AddHabitForm onAdd={setHabits} />
        <HabitList
          habits={habits}
          onDelete={habitDeleteHandler}
          onComplete={completedHabitHandler}
        />
      </main>
    </>
  );
}

export default App;
