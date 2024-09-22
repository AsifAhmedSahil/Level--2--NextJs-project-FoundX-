/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */


import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

interface IProps {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  type?: string;
  label: string;
  name: string;
}

export default function FXInput({
  variant = "bordered",
  size = "md",
  required = false,
  type = "text",
  label,
  name,
}: IProps) {
  const {
    register,
    
  } = useFormContext();

  return (
    <Input
      {...register(name)}
   
      variant={variant}
      size={size}
      required={required}
      type={type}
      label={label}
    />
  );
}