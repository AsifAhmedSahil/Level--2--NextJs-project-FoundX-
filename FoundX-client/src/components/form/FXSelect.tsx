/* eslint-disable prettier/prettier */
import { Select, SelectItem } from '@nextui-org/select'
import React from 'react'

import { IInput } from '@/src/types'
import { useFormContext } from 'react-hook-form'

interface IProps extends IInput {
    options:{
        key:string,
        label:string
    }[]
}

const FXSelect = ({options,name,label,variant="bordered"}:IProps) => {

    const {register} = useFormContext()


  return (
    <Select {...register(name)}
        className="min-w-full sm:min-w-[225px]"
        label={label} 
        variant={variant}
      >
        {options.map((option) => (
          <SelectItem key={option.key}>
            {option.label}
          </SelectItem>
        ))}
      </Select>
  )
}

export default FXSelect