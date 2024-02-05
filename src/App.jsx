import { ToastContainer } from "react-toastify";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Table from "./sections/Table";
import "react-toastify/dist/ReactToastify.css";
import { TaskProvider } from "./context/Providers";

import { initialState, taskReducer } from "./reducers/TaskReducer";
import { useReducer } from "react";

export default function App() {
    const [state, dispatch] = useReducer(taskReducer, initialState);

    return (
        <>
            <Header />
            <Hero />
            <TaskProvider value={{ state, dispatch }}>
                <Table />
            </TaskProvider>
            <Footer />
            <ToastContainer />
        </>
    );
}
