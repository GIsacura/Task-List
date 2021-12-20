import useGetTasks from "../hooks/useGetTasks";


const Header = ({Api}) => {
    const tasks = useGetTasks(Api)
    return (
        <div className="flex flex-col items-center bg-slate-100 border-2 border-black">
            <h1 className="w-24 ">Task List</h1>
            <div>You have {tasks.length} tasks</div>
        </div>
    );
};

export default Header;