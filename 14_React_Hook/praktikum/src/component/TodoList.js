import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FormInput from "./FormInput";
const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      const newTodo = [...todo, { id: uuidv4(), title, complete: false }];
      setTodo(newTodo);
      setTitle("");
    } else {
      alert(
        "Anda Harus Mengisi Inputan Terlebih Dahulu Sebelum Melakukan Submit"
      );
    }
  };

  const handleCheck = (id) => {
    const checkList = todo.map((m) => {
      if (m.id === id) {
        !m.complete ? (m.complete = true) : (m.complete = false);
      }
      return m;
    });
    setTodo(checkList);
  };

  const deleteItem = (id) => {
    const del = todo.filter((m) => m.id !== id);
    setTodo(del);
  };

  return (
    <div className="max-w-[100rem] ">
      <div className="flex justify-center">
        <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-600">
          todos
        </h1>
      </div>

      {/* input List */}
      <FormInput
        handleSubmit={handleSubmit}
        title={title}
        setTitle={setTitle}
      />

      {/* menampilkan list */}
      {todo.map((m) => (
        <div key={m.id} className="px-5">
          <div className="border-2 px-4 mt-2 py-2 rounded-3xl shadow-lg flex justify-between">
            <div className="flex">
              <input type="checkbox" onChange={() => handleCheck(m.id)} />
              <p
                className={`px-3 font-bold ${
                  m.complete ? "line-through italic opacity-75" : ""
                }`}
              >
                {m.title}
              </p>
            </div>
            <button
              className="font-semibold hover:bg-stone-600 px-2 rounded-full hover:text-white opacity-75"
              onClick={() => deleteItem(m.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
