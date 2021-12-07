import {
    CheckIcon
} from "@heroicons/react/outline";

function TodoCard({ duty }) {

    const { task, title } = duty;

    return (
        <div className="border-l-2 mt-10">
            <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">

                <div className="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>


                <div className="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>


                <div className="flex-auto">
                    <h1 className="text-lg">Day 1</h1>
                    <h1 className="text-xl font-bold">{title}</h1>
                    <h3>{task}</h3>
                </div>
                <div className="px-4" >
                    <CheckIcon className="button w-15 h-15" />
                </div>
            </div>
        </div>
    )
}

export default TodoCard
