import { addDoc, collection, onSnapshot, setDoc } from "@firebase/firestore";
import { PlusIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import db from "../firebase/firebase";
import DoneCard from "./DoneCard";
import TodoCard from "./TodoCard";

function Center() {

    const [tasks, setTasks] = useState([]);
    const [doneTasks, setDoneTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [task, setTask] = useState("");

    const handleNew = async () => {
        const collectionRef = collection(db, "data");
        const payload = { task, title };
        if (task !== "" && title !== "") {
            await addDoc(collectionRef, payload);
        } else {
            alert("Please enter the title and the task!");
        }
        setTask("");
        setTitle("");
    };

    useEffect(() => {
        onSnapshot(collection(db, "data"), (snapshot) => {
            setTasks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        })
    }, []);

    useEffect(() => {
        onSnapshot(collection(db, "done"), (snapshot) => {
            setDoneTasks(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        })
    }, []);

    return (
        <div className="flex mt-4">
            <div className="px-5 overflow-y-scroll h-screen scrollbar-hide">
                <div>
                    <h3 className="text-4xl font-normal leading-normal mt-0 mb-2 text-blue-300">
                        Works
                    </h3>
                    <div className="border-l-2 mt-5">
                        <div className="transition ml-10 relative flex items-center px-6 py-4 bg-yellow-300  rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                            <div className="w-5 h-5 bg-yellow-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                            <div className="w-10 h-1 bg-yellow-300 absolute -left-10 z-0"></div>
                            <div className="flex-auto">
                                <h1 className="text-xl font-bold"></h1>
                                <div className="flex flex-col items-center justify-center py-1">
                                    <form method="post">
                                        <div className="py-1">
                                            <div className="relative">
                                                <div className="flex flex-col space-y-2">
                                                    <label className="text-black select-none font-medium">Title</label>
                                                    <input
                                                        onChange={(e) => setTitle(e.target.value)}
                                                        type="text"
                                                        value={title}
                                                        className="py-2 text-lg px-3 font-bold bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="py-4">
                                            <div className="relative">
                                                <div className="flex flex-col space-y-2">
                                                    <label className="text-black select-none font-medium">Task</label>
                                                    <input
                                                        onChange={(e) => setTask(e.target.value)}
                                                        type="text"
                                                        value={task}
                                                        className="py-2 text-lg px-3 font-bold bg-gray-100 rounded-md focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <div className="pt-3" >
                                                <PlusIcon onClick={handleNew} className="button w-15 h-15 cursor-pointer hover:scale-200 transition transform duration-100 ease-out" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {tasks.map(duty => (
                            <TodoCard
                                key={duty.id}
                                duty={duty} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="px-5 overflow-y-scroll h-screen scrollbar-hide">
                <h3 className="text-green-300 text-4xl font-normal leading-normal mt-0 mb-2 text-lightBlue-800">
                    Works Done
                </h3>
                <div className="border-l-2 mt-5">
                    {doneTasks.map(doneDuty => (
                        <DoneCard
                            key={doneDuty.id}
                            doneDuty={doneDuty} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Center
