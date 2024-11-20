import { useInfiniteQuery } from "@tanstack/react-query";

const fetchWordBox = async(page) => {
    const response = await fetch(`$(API_KEY)?page=${page}`);
    return response.json();
};

const useGetWordBoxs = () => {
    return useInfiniteQuery({
        queryKey:['word-box'],
        queryFn:({pageParam})=>{
            return fetchWordBox(pageParam)
        },
        getNextPageParam:(last)=>{
            if(last.page < last.total_pages){
                return last.page + 1;
            }
            return undefined;
        },
        initialPageParam: 1,
    });
}

export default useGetWordBoxs;