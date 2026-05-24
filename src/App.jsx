import { useState, useEffect } from "react";

import Header from "./components/Header.jsx";
import AddHabitForm from "./components/AddHabitForm.jsx";
import HabitList from "./components/HabitList.jsx";
import Modal from "./components/Modal.jsx";
import Section from "./components/Section.jsx";

function App() {
  const [habits, setHabits] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const storedHabits = JSON.parse(localStorage.getItem("habits"));

    if (!storedHabits) {
      return;
    }

    const checkedHabits = storedHabits.map((habit) => {
      const today = Temporal.Now.plainDateISO().toString();

      const compareValue = Temporal.PlainDate.compare(today, habit.nextCheck);
      const isToBeChecked = compareValue === 0 || compareValue === 1;

      if (isToBeChecked) {
        return { ...habit, isCompletedToday: false };
      } else {
        return habit;
      }
    });

    setHabits(checkedHabits);
  }, []);

  function habitDeleteHandler(id) {
    setHabits((prevHabits) => {
      const updatedHabits = prevHabits.filter((habit) => habit.id !== id);

      localStorage.setItem("habits", JSON.stringify(updatedHabits));

      return [...updatedHabits];
    });
  }

  function completedHabitHandler(id) {
    setHabits((prevHabits) => {
      const updatedHabits = prevHabits.map((habit) => {
        const nextCheck = Temporal.Now.plainDateISO()
          .add({ days: 1 })
          .toString();

        return habit.id === id
          ? {
              ...habit,
              isCompletedToday: true,
              streakCount: habit.streakCount++,
              nextCheck: nextCheck,
            }
          : habit;
      });

      localStorage.setItem("habits", JSON.stringify(updatedHabits));

      return [...updatedHabits];
    });
  }

  function handleModalClose() {
    setOpen(false);
  }
  function handleModalOpen() {
    setOpen(true);
  }

  console.log(habits);

  return (
    <>
      <Modal open={open} onClose={handleModalClose}>
        <AddHabitForm onAdd={setHabits} onClose={handleModalClose} />
      </Modal>
      <Header />
      <main className=" mt-30">
        {habits.length === 0 && <Section onOpen={handleModalOpen}></Section>}
        <HabitList
          habits={habits}
          onOpen={handleModalOpen}
          onDelete={habitDeleteHandler}
          onComplete={completedHabitHandler}
        />
      </main>
    </>
  );
}

export default App;
