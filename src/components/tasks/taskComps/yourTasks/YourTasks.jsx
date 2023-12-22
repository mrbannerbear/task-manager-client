import { useState } from "react";
import Ongoing from "./Ongoing";
import ToDo from "./ToDo";
import useTasks from "../../../../custom/useTasks";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Completed from "./Completed";

const YourTasks = () => {

    const {tasks, refetch} = useTasks()

    console.log(tasks)

    const [checkedState, setCheckedState] = useState({
        1: true,
        2: true,
        3: true
    })

    const handleToggle = (id) => {
        setCheckedState((prev) => ({
            ...prev,
            [id]: !prev[id]
        }))
    }

    const taskTypes = [
        {
            id:1,
            name: "To-Do",
            element: <ToDo tasks={tasks} refetch={refetch}></ToDo>
        },
        {
            id: 2,
            name: "Ongoing",
            element: <Ongoing tasks={tasks} refetch={refetch}></Ongoing>
        },
        {
            id: 3,
            name: "Completed",
            element: <Completed  tasks={tasks} refetch={refetch}></Completed>
        }
    ]

  return (
    <div className="min-h-screen bg-base-100 rounded-sm z-[100]">
        {
            taskTypes.map(
                each => (

                    <div key={each.id} className="bg-base-100 rounded-none border-b-2 p-4">
                    
                    <div className=" text-xl font-medium flex justify-between">
                      <span>
                      {each.name}
                      </span>
                      <button onClick={() => handleToggle(each.id)}>
                      { checkedState[each.id] ? <IoIosArrowUp></IoIosArrowUp> : <IoIosArrowDown></IoIosArrowDown>}
                      </button>
                    </div>
                   {checkedState[each.id] && <div className="py-2">
                        {each.element}
                    </div>}
                  </div>

                )
            )
        }
    </div>
  );
};

export default YourTasks;
