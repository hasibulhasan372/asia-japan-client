import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useFeature = () => {
    const {data: features = []} = useQuery({
        queryKey:["features"],
        queryFn: async () =>{
            const res = await axios.get("http://localhost:5000/features")
            return res.data;
        }

    })
    return [features];
};

export default useFeature;