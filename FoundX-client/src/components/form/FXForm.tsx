/* eslint-disable padding-line-between-statements */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */

import { ReactNode } from "react"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

// interface IProps {
//   children:ReactNode
// }

interface formConfig {
  defaultValues?:Record<string,any>
  resolver?:any
}

interface IProps extends formConfig {
  children:ReactNode,
  onSubmit:SubmitHandler<any>
}

const FXForm = ({ children, onSubmit,defaultValues,resolver }:IProps) => {

  const formConfig :formConfig = {}

  if(!!defaultValues){
    formConfig["defaultValues"] = defaultValues
  }
  if(!!resolver){
    formConfig["resolver"] = resolver
  }

  const methods = useForm(formConfig);

  const submitHandler = methods.handleSubmit;
  return (
    <FormProvider {...methods}>
      <form onSubmit={submitHandler(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default FXForm;
