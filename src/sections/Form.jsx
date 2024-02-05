import { useContext, useState } from "react";
import { toast } from "react-toastify";
import Button from "../components/Button";
import DeleteModal from "../components/DeleteModal";
import { TaskContext } from "../context";
import Modal from "./Modal";

function Form() {
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [deleteModal, setDeleModal] = useState(false);

  const { state, dispatch } = useContext(TaskContext);

  const deleteAllHandler = () => {
    dispatch({
      type: "DELETE_ALL",
    });

    setDeleModal(false);
    toast.success("All tasks removed successfully");
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let updateTask = state.taskData.map((task) => {
      return {
        ...task,
        status: task.title.toLowerCase().includes(search.toLowerCase()),
      };
    });

    dispatch({
      type: "SEARCH_RESULT",
      payload: updateTask,
    });
  };

  return (
    <div className="flex items-center space-x-5">
      <form onSubmit={submitHandler}>
        <div className="flex">
          <div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
            <input
              type="search"
              id="search-dropdown"
              className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
              placeholder="Search Task"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4"
            >
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
      <Button onClick={() => setModal(true)} className="bg-blue-500">
        Add Task
      </Button>
      <Button onClick={() => setDeleModal(true)} className="bg-red-500">
        Delete All
      </Button>

      {modal && <Modal onClose={() => setModal(false)} />}
      {deleteModal && (
        <DeleteModal
          onAgree={deleteAllHandler}
          onClose={() => setDeleModal(false)}
          title="Are you sure to delete all tasks?"
        />
      )}
    </div>
  );
}

export default Form;
