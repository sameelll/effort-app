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
        const payload = { task, title }
        await addDoc(collectionRef, payload);
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
        <div> 
            <div className="flex flex-col-2">
                <div className="px-10 text-xs lg:text-sm overflow-y-scroll scrollbar-hide h-screen">
                    <div>
                        <div className="border-l-2 mt-10">
                            <div className="transition cursor-pointer  ml-10 relative flex items-center px-6 py-4 bg-yellow-500 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                                <div className="w-5 h-5 bg-yellow-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                                <div className="w-10 h-1 bg-yellow-300 absolute -left-10 z-0"></div>
                                <div className="flex-auto">
                                    <h1 className="text-lg">Day 1</h1>
                                    <h1 className="text-xl font-bold"></h1>
                                    <div className="flex flex-col items-center justify-center py-4">
                                        <form>
                                            <div className="py-4">
                                                <div className="relative">
                                                    <input
                                                        onChange={(e) => setTitle(e.target.value)}
                                                        type="text"
                                                        className="bg-yellow-500 border-b py-1 focus:outline-none focus:border-gray-700 focus:border-b-2 transition-colors peer" />
                                                    <label className="absolute left-0 top-1 text-whitecursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-gray-700 transition-all">Title</label>
                                                </div>
                                            </div>
                                            <div className="py-4">
                                                <div className="relative">
                                                    <input
                                                        onChange={(e) => setTask(e.target.value)}
                                                        type="text"
                                                        className="bg-yellow-500 border-b py-1 focus:outline-none focus:border-gray-700 focus:border-b-2 transition-colors peer" />
                                                    <label className="absolute left-0 top-1 text-white cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-gray-700 transition-all">Task</label>
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
                <div className="px-5 text-xs lg:text-sm overflow-y-scroll scrollbar-hide h-screen">
                    <div className="border-l-2 mt-10">
                        {doneTasks.map(doneDuty => (
                            <DoneCard
                                key={doneDuty.id}
                                doneDuty={doneDuty} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Center
