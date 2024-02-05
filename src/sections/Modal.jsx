import { useContext, useState } from "react";
import Button from "../components/Button";
import { TaskContext } from "../context";
import { formValidate } from "../utils/formValidate";
import { toast } from "react-toastify";

function Modal({ onClose, editTask }) {
    const initialFormData = editTask
        ? editTask
        : {
              id: 0,
              isFavorite: false,
              active: true,
              title: "",
              description: "",
              tags: "",
              priority: "",
          };

    const [formData, setFormData] = useState({ ...initialFormData });
    const { dispatch } = useContext(TaskContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (formValidate(formData)) {
            // return if any property is empty;
            toast.warn("Please fill every field");
            return;
        }

        if (editTask) {
            dispatch({
                type: "EDIT_TASK",
                payload: {
                    id: editTask.id,
                    ...formData,
                },
            });

            toast.success("Task updated successfully");
        } else {
            dispatch({
                type: "ADD_TO_TASK",
                payload: {
                    ...formData,
                    id: crypto.randomUUID(),
                },
            });

            toast.success("Task added successfully");
        }

        setFormData({ ...initialFormData });
        onClose();
    };

    return (
        <>
            <div
                onClick={onClose}
                className="fixed top-0 left-0 z-[99] backdrop-blur-md w-full h-full"
            ></div>
            <form
                onSubmit={submitHandler}
                className="mx-auto z-[999] absolute left-1/2 top-3 transform -translate-x-1/2 my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11"
            >
                <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
                    Add New Task
                </h2>

                <div className="space-y-9 text-white lg:space-y-10">
                    <div className="space-y-2 lg:space-y-3">
                        <label htmlFor="title">Title</label>
                        <input
                            className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                            type="text"
                            name="title"
                            id="title"
                            value={formData.title}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="space-y-2 lg:space-y-3">
                        <label htmlFor="description">Description</label>
                        <textarea
                            className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
                            type="text"
                            name="description"
                            id="description"
                            onChange={handleChange}
                            value={formData.description}
                        ></textarea>
                    </div>

                    <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
                        <div className="space-y-2 lg:space-y-3">
                            <label htmlFor="tags">Tags</label>
                            <input
                                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                                type="text"
                                name="tags"
                                id="tags"
                                onChange={handleChange}
                                value={formData.tags}
                            />
                        </div>

                        <div className="space-y-2 lg:space-y-3">
                            <label htmlFor="priority">Priority</label>
                            <select
                                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                                name="priority"
                                id="priority"
                                onChange={handleChange}
                                value={formData.priority}
                            >
                                <option value="">Select Priority</option>
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex justify-center lg:mt-20">
                    <Button type="submit" className="bg-blue-600 mr-1">
                        {editTask ? "Edit Task" : "Create Task"}
                    </Button>
                    <Button onClick={onClose} className="bg-orange-600 ml-1">
                        Close Modal
                    </Button>
                </div>
            </form>
        </>
    );
}

export default Modal;
