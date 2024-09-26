/* eslint-disable padding-line-between-statements */
/* eslint-disable prettier/prettier */
import axiosInstance from "@/src/lib/AxiosInstance";

export const Categories = async () => {
  try {
    const data = await axiosInstance.get("/item-categories");
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
