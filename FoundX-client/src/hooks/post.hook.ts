/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import { useMutation } from "@tanstack/react-query"
import { createPost } from "../services/Post"
import { toast } from "sonner"

export const useCreatePost = () =>{
    return useMutation<any,Error,FormData>({
        mutationKey: ["CREATE_POST"],
        mutationFn: async (postData) => await createPost(postData),

        onSuccess: () =>{
            toast.success("Post Created Successfully!")
        },
        onError: (error) =>{
            toast.error(error.message)
        }

    })
}