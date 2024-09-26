/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-sort-props */
import { IInput } from '@/src/types'
import { DatePicker } from '@nextui-org/date-picker'
import React from 'react'
import { Controller } from 'react-hook-form'

interface IProps extends IInput{}

const FXDatePicker = ({label,name}: IProps ) => {

    

  return <Controller name={name} render={({field:{value,...fields}})=><DatePicker label={label} className="max-w-[284px]" {...fields} />} />
}

export default FXDatePicker