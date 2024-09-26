/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
import { DatePicker } from '@nextui-org/date-picker'
import React from 'react'
import { Controller } from 'react-hook-form'

import { IInput } from '@/src/types'

interface IProps extends IInput{}

const FXDatePicker = ({label,name,variant="bordered"}: IProps ) => {

    

  return <Controller name={name} render={({field:{value,...fields}})=><DatePicker label={label} className="min-w-full sm:min-w-[225px]" {...fields}  variant={variant}/>} />
}

export default FXDatePicker