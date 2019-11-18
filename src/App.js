import React from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import TodosList from "./components/TodosList";

const App = () => {
  return (
    <main className="App">
      <Header />
      <SearchForm />
      <TodosList />
    </main>
  );
};

export default App;
