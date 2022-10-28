import { configureStore } from "@reduxjs/toolkit";
import { errorReducer } from "./slices/error";
import { currentUserReducer } from "./slices/currentUser";
import { reducer as ormReducer } from "./orm";
import { createPost } from "./models/Post";
import { createUser } from "./models/User";

const store = configureStore({
  reducer: {
    orm: ormReducer,
    currentUser: currentUserReducer,
    error: errorReducer
  }
});

// add some initial fake data
store.dispatch(createUser({ id: 1, name: "Anna" }));
store.dispatch(createPost({ content: "A starter post by Anne", user: 1 }));

export default store;
