import Star from "../components/Star";
import Tag from "../components/Tag";

function TableRow({ task, onEdit, onDelete, onFavorite }) {
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
            <td>
                <Star
                    onClick={() => onFavorite(task)}
                    status={task.isFavorite}
                />
            </td>
            <td>{task.title}</td>
            <td>
                <div>{task.description}</div>
            </td>
            <td>
                <ul className="flex justify-center gap-1.5 flex-wrap">
                    {task.tags.split(",").map((tag, index) => {
                        return (
                            <li key={index}>
                                <Tag title={tag} />
                            </li>
                        );
                    })}
                </ul>
            </td>
            <td className="text-center">{capitalize(task.priority)}</td>
            <td>
                <div className="flex items-center justify-center space-x-3">
                    <button
                        onClick={() => onDelete(task)}
                        className="text-red-500"
                    >
                        Delete
                    </button>
                    <button className="text-blue-500" onClick={onEdit}>
                        Edit
                    </button>
                </div>
            </td>
        </tr>
    );
}

export default TableRow;
