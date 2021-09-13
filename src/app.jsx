import React, { useState } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

function App() {
  const initialState = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 4, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Стартовый набор минималиста" },
    { value: 0, id: 5, name: "Ненужные вещи" },
  ];
  const [counters, setCounters] = useState(initialState);

  const handleDelete = (counterId) => {
    console.log(counterId);
    setCounters(counters.filter((item) => item.id !== counterId));
  };

  const handleReset = () => setCounters(initialState);

  const handleIncrement = (counterId) => {
    const updatedCounters = counters.map((item) => {
      if (item.id === counterId) {
        item.value++;
      }
      return item;
    });
    setCounters(updatedCounters);
  };

  const handleDecrement = (counterId) => {
    const updatedCounters = counters.map((item) => {
      if (item.value !== 0 && item.id === counterId) {
        item.value--;
      }
      return item;
    });
    setCounters(updatedCounters);
  };

  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((a, c) => a + c.value, 0)} />
        <Counters
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
          counters={counters}
        />
      </main>
    </div>
  );
}
export default App;