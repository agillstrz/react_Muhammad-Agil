import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import taskReducer from "./features/taskSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};
const reducers = combineReducers({
  tasks: taskReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({ reducer: persistedReducer });
const persistor = persistStore(store);

export { store, persistor };
