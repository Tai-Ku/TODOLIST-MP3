import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [work, setWork] = useState("");
  const [todo, setTodo] = useState([]);
  const handleClick = () => {
    if (todo.some((item) => item.id === work.replace(/\s/g, ""))) {
      toast.warn("work đã được add vào trước đó");
    } else {
      setTodo((prev) => [
        ...prev,
        {
          id: work.replace(/\s/g, ""),
          job: work,
        },
      ]);
      setWork("");
    }
  };
  const handleClose = (id) => {
    setTodo((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <>
      <div className="flex flex-col gap-8 justify-center border h-screen items-center">
        <div className="flex gap-8 items-center">
          <input
            type="text"
            value={work}
            onChange={(e) => setWork(e.target.value)}
            className="outline-none border border-blue-600 px-4 py-2 w-[400px]"
          />
          <button
            type="button"
            onClick={handleClick}
            className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white "
          >
            ADD
          </button>
        </div>
        <div>
          <h2 className="font-bold text-xl">Content</h2>
          <ul>
            {todo.map((todo) => (
              <li
                key={todo.id}
                className="flex items-center gap-8 justify-between"
              >
                <span>{todo.job}</span>
                <span
                  className="cursor-pointer"
                  onClick={() => handleClose(todo.id)}
                >
                  X
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
