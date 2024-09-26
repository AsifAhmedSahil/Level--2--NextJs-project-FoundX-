/* eslint-disable prettier/prettier */
import { useQuery } from "@tanstack/react-query"
import { Categories } from "../services/Categories"

export const useGetCategries = () =>{
    return useQuery({
        queryKey:["GET_CATEGORIES"],
        queryFn: async() => await Categories()
    })
}