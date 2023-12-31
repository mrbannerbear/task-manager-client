import axios from "axios";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import useTasks from "../../../../custom/useTasks";
import { useParams } from "react-router-dom";

const EditTasks = () => {
  const { register, handleSubmit } = useForm();

  const {tasks} = useTasks()
  const params = useParams()

  const target = tasks.find(each => each?._id == params.id)

  const handleForm = (d) => {
    axios
      .patch(`https://project-pilot-server.vercel.app/tasks/${target?._id}`, d)
      .then((res) => {
        console.log(res);
        toast("Task updated")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center items-center bg-base-100 rounded-sm">
      <form
        className="w-3/4 mx-auto"
        onSubmit={handleSubmit(handleForm)}
      >
        <div className="relative z-0 w-full mb-6 group">
          <input
            {...register("title")}
            type="text"
            name="title"
            id="title"
            defaultValue={target?.title}
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b border-[#607244] appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#607244] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="title"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Task Title
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <textarea
            {...register("description")}
            name="description"
            id="description"
            defaultValue={target?.description}
            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b border-[#607244] appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#607244] peer"
            placeholder=""
            required
          />
          <label
            htmlFor="description"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Description
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            {...register("deadline")}
            type="date"
            name="deadline"
            id="deadline"
            defaultValue={target?.deadline}
            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b border-[#607244] appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#607244] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="deadline"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Deadline
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <select
            {...register("priority")}
            name="priority"
            id="priority"
            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b border-[#607244] appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#607244] peer"
            placeholder=" "
            required
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <label
            htmlFor="priority"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Priority
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <select
            {...register("status")}
            name="status"
            id="status"
            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b border-[#607244] appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#607244] peer"
            placeholder=" "
            required
          >
            <option value="To-do">To-do</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Completed">Completed</option>
          </select>
          <label
            htmlFor="status"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4  peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Status
          </label>
        </div>
        <button type="submit" className="btn1">
          Update
        </button>
      </form>
      <Toaster></Toaster>
    </div>
  );
};

export default EditTasks;
