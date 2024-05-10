import { useState } from "react";
import { RiUserFill, RiSearch2Line, RiDeleteBin6Line } from "react-icons/ri";
import { nanoid } from "nanoid";
const App = () => {
  const [tasks, settasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [] );

  const [title, settitle] = useState("");
  const SubmitHandler = (e) => {
    e.preventDefault();
    const newtodo = { id: nanoid(), title, completed: false };
    console.log(newtodo);

    const copytasks = [...tasks];
    copytasks.push(newtodo);
    settasks(copytasks);

    settasks([...tasks, newtodo]);
      localStorage.setItem("tasks", JSON.stringify([...tasks, newtodo]));
  };
  console.log(tasks);

  return (
    <div className="w-screen min-h-[100vh] bg-[#272128] flex items-center justify-center">
      <div className="w-[30%] h-[80vh] bg-[#3C313E] p-6">
        {/*  Top Heading */}
        <div className="w-full h-[7vh] flex items-center justify-between text-white">
          <h3>Hey , Dhruv</h3>
          <RiUserFill />
        </div>
        <div>
          <h6 className="text-slate-400">21 sep 2022 12:00</h6>
        </div>
        <div className="w-full h-[8vh] bg-[#312732] p-3 mt-7 text-white flex items-center justify-between">
          <h3>Total task </h3>
          <h1 className="bg-[#D2605D] p-3 mr-[-2.2vh]" >0/{tasks.length}</h1>
        </div>
        {/* Form */}
        <form
          onChange={SubmitHandler}
          className="w-full h-[5vh] mt-5 flex items-center"
        >
          <input
            onChange={(e) => settitle(e.target.value)}
            type="text"
            className="w-[23vw] h-[8vh] rounded bg-[#312732] p-3 focus:outline-none focus:border-[#D2605D] focus:ring-[#D2605D] focus:ring-2 sm:text-sm text-white"
            placeholder="Enter your task here"
            value={title}
          />
          <button
            type="submit"
            className="text-white ml-2 text-lg bg-[#D2605D] p-3 rounded-xl"
          >
            <RiSearch2Line />
          </button>
        </form>
        {/* Tasks */}
        <div className="mt-7">
          <ul className="list-none w-[100%] ">
            <li className="mb-3 flex justify-between items-center border rounded-xl p-2">
              <div className="flex items-center">
                <div
                  className={`border mr-4 rounded-full w-[30px] h-[30px]  border-orange-600`}
                ></div>
                <h3 className={` text-2x font-extrabold text-white`}>
                  Task 01
                </h3>
              </div>
              <div className="flex gap-3 text-2x text-white cursor-pointer">
                <RiDeleteBin6Line />
              </div>
            </li>
            <li className="mb-5 flex justify-between items-center border rounded-xl p-2">
              <div className="flex items-center">
                <div
                  className={`bg-green-600 mr-4 rounded-full w-[30px] h-[30px]  border-orange-600`}
                ></div>
                <h3
                  className={`line-through text-2x font-extrabold text-white`}
                >
                  Task 01
                </h3>
              </div>

              <div className="flex gap-3 text-2x text-white cursor-pointer">
                <RiDeleteBin6Line />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default App;
