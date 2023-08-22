import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
} from "react";
import { load, save } from "../utils/async-storage";

export interface Todo {
  title: string;
  text: string;
  uid: string;
}

interface State {
  todos: Todo[];
}

type Action =
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "DELETE_TODO"; payload: string }
  | { type: "EDIT_TODO"; payload: { uid: string; title: string; text: string } }
  | { type: "LOAD_TODOS"; payload: Todo[] };

interface ContextValue {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const ASYNC_STORAGE_TODO_KEY = "todos";

const TodoContext = createContext<ContextValue | undefined>(undefined);

const initialState: State = {
  todos: [],
};

const todoReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TODO":
      const newStateAdd = {
        ...state,
        todos: [...state.todos, action.payload],
      };
      save(ASYNC_STORAGE_TODO_KEY, newStateAdd.todos);
      return newStateAdd;
    case "DELETE_TODO":
      const newStateDelete = {
        ...state,
        todos: state.todos.filter((todo) => todo.uid !== action.payload),
      };
      save(ASYNC_STORAGE_TODO_KEY, newStateDelete.todos);
      return newStateDelete;
    case "EDIT_TODO":
      const newStateEdit = {
        ...state,
        todos: state.todos.map((todo) =>
          todo.uid === action.payload.uid
            ? {
                ...todo,
                title: action.payload.title,
                text: action.payload.text,
              }
            : todo
        ),
      };
      save(ASYNC_STORAGE_TODO_KEY, newStateEdit.todos);
      return newStateEdit;
    case "LOAD_TODOS":
      return {
        ...state,
        todos: action.payload,
      };
    default:
      return state;
  }
};

interface TodoProviderProps {
  children: ReactNode;
}

const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    const loadTodosFromStorage = async () => {
      const savedTodos = (await load<Todo[]>(ASYNC_STORAGE_TODO_KEY)) || [];
      dispatch({ type: "LOAD_TODOS", payload: savedTodos });
    };
    loadTodosFromStorage();
  }, []);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

const useTodoContext = (): ContextValue => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext должен быть внутри TodoProvider");
  }
  return context;
};

const useTodoByUid = (uid?: string): Todo | undefined => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext должен быть внутри TodoProvider");
  }
  return context.state.todos.find((t) => t.uid === uid);
};

export { TodoProvider, useTodoContext, useTodoByUid };
