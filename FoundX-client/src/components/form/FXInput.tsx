/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
'use client'

import { IInput } from "@/src/types";
import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

interface IProps extends IInput{}

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
    formState:{errors}
    
  } = useFormContext();

  return (
    <Input
      {...register(name)}
      isInvalid={!!errors[name]}
      errorMessage={errors[name] ? (errors[name].message as string) : ""}
   
      variant={variant}
      size={size}
      required={required}
      type={type}
      label={label}
    />
  );
}