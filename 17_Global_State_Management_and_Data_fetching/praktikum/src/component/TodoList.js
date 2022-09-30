import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, updateTask } from "../Redux/features/taskSlice";
const TodoList = () => {
  const [title, setTitle] = useState("");
  const todo = useSelector((state) => state.tasks.task);
  let dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title) {
      dispatch(
        addTask({
          task: title,
        })
      );
      setTitle("");
    } else {
      alert(
        "Anda Harus Mengisi Inputan Terlebih Dahulu Sebelum Melakukan Submit"
      );
    }
  };

  return (
    <div className="lg:mx-[15rem]">
      <div className="flex justify-center">
        <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-600">
          todos
        </h1>
      </div>
      {/* input List */}
      <div className="px-2">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="border-2 mt-2 py-3 px-4 rounded-3xl shadow-lg flex justify-between">
            <div className="flex w-full">
              <input
                className="w-full appearance-none leading-tight focus:outline-none focus:shadow-outline "
                type="text"
                value={title}
                placeholder="Add to do..."
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <button type="submit" className="btn-hover">
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* menampilkan list */}
      {todo.map((m) => (
        <div key={m.id} className="px-5">
          <div className="border-2 px-4 mt-2 py-2 rounded-3xl shadow-lg flex justify-between">
            <div className="flex">
              <input
                type="checkbox"
                onChange={() => dispatch(updateTask(m.id))}
              />
              <p
                className={`px-3 font-bold ${
                  m.complete ? "line-through italic opacity-75" : ""
                }`}
              >
                {m.title}
              </p>
            </div>
            <button
              onClick={() => dispatch(deleteTask(m.id))}
              className="font-semibold hover:bg-stone-600 px-2 rounded-full hover:text-white opacity-75"
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
