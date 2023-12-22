import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const ToDo = ({ tasks, refetch }) => {

    const navigate = useNavigate()

  return (
    <div>
      {tasks
        .filter((each) => each?.status == "To-do")
        .map((each) => (
          <p
            key={each?.title}
            className="mb-2 pb-2 border-b flex justify-between pr-6"
          >
            <p className="w-1/3">
              <h3>{each?.title}</h3>
              <p className="text-xs text-gray-600">{each?.description}</p>
            </p>

            <p
              className={`text-center w-20 ${
                each?.priority == "High"
                  ? "text-red-500"
                  : each?.priority == "Medium"
                  ? "text-orange-500"
                  : "text-pink-500"
              }`}
            >
              {each?.priority}
            </p>

            <p className="flex gap-2">
                <button onClick={() => navigate(`/edit-task/${each?._id}`)}>
                    <FaEdit className="text-xs"></FaEdit>
                </button>
                <button onClick={() => {
                    axios.delete(`https://project-pilot-server.vercel.app/tasks/${each?._id}`)
                    .then(() => {
                        toast("Task deleted");
                        refetch()})
                    .catch(err => console.log(err))
                }}>
                    <FaTrash className="text-xs"></FaTrash>
                </button>
            </p>
          </p>
        ))}
        <Toaster></Toaster>
    </div>
  );
};

export default ToDo;
