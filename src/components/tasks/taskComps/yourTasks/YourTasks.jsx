import { useState } from "react";
import Ongoing from "./Ongoing";

const YourTasks = () => {

    const [checkedState, setCheckedState] = useState({
        1: false,
        2: false,
        3: false
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
            element: <>hello</>
        },
        {
            id: 2,
            name: "Ongoing",
            element: <Ongoing></Ongoing>
        },
        {
            id: 3,
            name: "Completed",
            element: <>Hello</>
        }
    ]

  return (
    <div className="min-h-screen bg-base-100 rounded-sm z-[100]">
        {
            taskTypes.map(
                each => (

                    <div key={each.id} className="bg-base-100 rounded-none border-b-2 border-red-300">
                    
                    <div className=" text-xl font-medium flex justify-between">
                      <span>
                      {each.name}
                      </span>
                      <button onClick={() => handleToggle(each.id)}>
                        i
                      </button>
                    </div>
                   {checkedState[each.id] && <div className="">
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
