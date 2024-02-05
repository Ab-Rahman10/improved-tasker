import { useContext, useState } from "react";
import { toast } from "react-toastify";
import DeleteModal from "../components/DeleteModal";
import { TaskContext } from "../context";
import Form from "./Form";
import Modal from "./Modal";
import TableRow from "./TableRow";

function Table() {
  const { state, dispatch } = useContext(TaskContext);
  const [modal, setModal] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [deleteModal, setDeleModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState({});

  const editHandler = (task) => {
    setEditTask(task);
    setModal(true);
  };

  const deleteHandler = (task) => {
    setDeleModal(true);
    setDeleteItem(task);
  };

  const deleteItemAfterAgree = () => {
    dispatch({
      type: "DELETE_ITEM",
      payload: {
        ...deleteItem,
      },
    });
    setDeleModal(false);
    toast.success("Task removed successfully");
  };

  const favoriteHandler = (task) => {
    dispatch({
      type: "ADD_FAVORITE",
      payload: {
        ...task,
      },
    });
  };

  return (
    <section className="mb-20" id="tasks">
      <div className="container m-auto">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <div className="mb-14 items-center justify-between sm:flex">
            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
            <Form />
          </div>
          <div className="overflow-auto">
            <table className="table-fixed overflow-auto xl:w-full">
              <thead>
                <tr>
                  <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
                  <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
                    Title
                  </th>
                  <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
                    Description
                  </th>
                  <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
                    Tags
                  </th>
                  <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                    Priority
                  </th>
                  <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
                    Options
                  </th>
                </tr>
              </thead>
              <tbody>
                {state.taskData.length === 0 ? (
                  <tr>
                    <td colSpan={6}>
                      <h4 className="bg-gray-800 py-4 text-xl text-center text-[#00D991A1]">
                        Task list is empty!
                      </h4>
                    </td>
                  </tr>
                ) : (
                  state.taskData.map((task) => {
                    {
                      if (task.status !== false) {
                        return (
                          <TableRow
                            onEdit={() => editHandler(task)}
                            onDelete={deleteHandler}
                            onFavorite={favoriteHandler}
                            key={task.id}
                            task={task}
                          />
                        );
                      }
                    }
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {modal && <Modal editTask={editTask} onClose={() => setModal(false)} />}

      {deleteModal && (
        <DeleteModal
          onAgree={deleteItemAfterAgree}
          onClose={() => setDeleModal(false)}
          title="Are you sure, you want to delete this item?"
        />
      )}
    </section>
  );
}

export default Table;
