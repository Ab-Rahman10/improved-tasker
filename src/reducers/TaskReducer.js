const initialState = {
    taskData: [],
};

const taskReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_TASK":
            return {
                ...state,
                taskData: [...state.taskData, action.payload],
            };

        case "EDIT_TASK":
            return {
                ...state,
                taskData: state.taskData.map((task) => {
                    if (task.id === action.payload.id) {
                        return { ...action.payload };
                    } else {
                        return { ...task };
                    }
                }),
            };

        case "DELETE_ITEM":
            return {
                ...state,
                taskData: state.taskData.filter((task) => {
                    return task.id !== action.payload.id;
                }),
            };

        case "DELETE_ALL":
            return {
                ...state,
                taskData: [],
            };

        case "ADD_FAVORITE":
            return {
                ...state,
                taskData: state.taskData.map((task) => {
                    if (task.id === action.payload.id) {
                        return {
                            ...action.payload,
                            isFavorite: !action.payload.isFavorite,
                        };
                    } else {
                        return { ...task };
                    }
                }),
            };
        case "SEARCH_RESULT":
            return {
                ...state,
                taskData: [...action.payload],
            };
        default:
            break;
    }
};

export { initialState, taskReducer };
