/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable prettier/prettier */
"use client";

import FXInput from "@/src/components/form/FXInput";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { FieldValues, FormProvider, SubmitHandler, useFieldArray, useForm } from "react-hook-form";

export default function CreatePostPage() {
  const methods = useForm();
  const { control,handleSubmit } = methods;

  const {fields ,append, remove} = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit : SubmitHandler<FieldValues>= (data) =>{
    

    const postData = {
      ...data,
      questions: data.questions.map((ques : {value:string})=>ques.value)
    }

    console.log(postData)
  }

  const handleFieldAppend = () =>{
    append({ name:"questions" })
  }

  return (
    <div className="">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FXInput name="title" label="Title" />

          <Divider className="my-5"/>

          <div className="flex justify-between items-center">
            <h1 className="text-xl">Owner Verification Address</h1>
            <Button onClick={()=>handleFieldAppend()}>Append</Button>
          </div>
          <Divider className="my-5"/>

          {
            fields.map((field,index)=>(
              <div key={field.id} className="mb-3 flex items-center gap-2">

              <FXInput  name={`questions.${index}.value`} label="Question"/>
              <Button onClick={() => remove(index)}>Remove</Button>
              </div>
            ))
          }

          <Button type="submit">Post</Button>
        </form>
      </FormProvider>
    </div>
  );
}
