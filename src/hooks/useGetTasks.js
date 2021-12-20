import axios from "axios";
import { useEffect, useState } from "react";


const useGetTasks = (Api) =>{
    const [tasksList, setTasksList] = useState([]);

    useEffect(async () => {
        const response = await axios(Api);
        setTasksList(response.data);
    },[]);
    return tasksList
}

export default useGetTasks