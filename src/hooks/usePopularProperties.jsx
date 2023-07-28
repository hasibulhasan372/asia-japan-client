import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const usePopularProperties = () => {
    const {data: popularProperties = []} = useQuery({
        queryKey: ["popularProperties"],
        queryFn: async ()=>{
            const res = await axios.get(`${import.meta.env.VITE_SERVER_LINK}/popularProperties`)
            return res.data;
        }
    })
    return [popularProperties];
};

export default usePopularProperties;