import { TaskContext } from "./index";

function TaskProvider({ value, children }) {
    const { state, dispatch } = value;
    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    );
}

export { TaskProvider };
