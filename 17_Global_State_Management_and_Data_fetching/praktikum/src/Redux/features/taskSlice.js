import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = { task: [] };

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: uuidv4(),
        title: action.payload.task,
        complete: false,
      };
      state.task.push(newTask);
    },
    deleteTask: (state, action) => {
      state.task = state.task.filter((item) => item.id !== action.payload);
    },
    updateTask: (state, action) => {
      state.task.map((m) => {
        if (m.id === action.payload) {
          m.complete = !m.complete;
        }
      });
    },
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;
export default taskSlice.reducer;
