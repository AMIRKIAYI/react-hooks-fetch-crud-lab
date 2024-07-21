import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch questions from the API when the component mounts
    fetch("http://localhost:4000/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  const addQuestion = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
  };

  const deleteQuestion = (id) => {
    setQuestions(questions.filter((question) => question.id !== id));
  };

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm addQuestion={addQuestion} />
      ) : (
        <QuestionList questions={questions} deleteQuestion={deleteQuestion} />
      )}
    </main>
  );
}

export default App;
