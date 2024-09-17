import React from "react";
import {
  ButtonContainer,
  CustomButton,
  FormContainer,
  InputContainer,
} from "./styles";
import { Input } from "@/src/components";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { EditProfileValidationSchema } from "./validation";

interface FormValues {
  name: string;
  userName: string;
  email: string;
  password: string;
}

const EditProfileForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      userName: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(EditProfileValidationSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log("data", data);
  };

  console.log("errors", errors);

  return (
    <FormContainer>
      <InputContainer>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <Input
              variant="variant1"
              placeholder="Charlene Reed"
              text="Your Name"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="userName"
          render={({ field }) => (
            <Input
              variant="variant1"
              placeholder="Charlene Reed"
              text="User Name"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Input
              variant="variant1"
              placeholder="charlenereed@gmail.com"
              text="Email"
              {...field}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <Input
              variant="variant1"
              placeholder="**********"
              text="Password"
              {...field}
            />
          )}
        />
      </InputContainer>
      <ButtonContainer>
        <CustomButton
          onClick={handleSubmit(onSubmit)}
          title="Save"
          variant="form"
        />
      </ButtonContainer>
    </FormContainer>
  );
};

export default EditProfileForm;
