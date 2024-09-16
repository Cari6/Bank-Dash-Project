import React, { use } from "react";
import { FormContainer, InputContainer, Item } from "./styles";
import Typography from "@/src/components/typography";
import { Input } from "@/src/components";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { EditProfileValidationSchema } from "./validation";
import { ButtonContainer, CustomButton } from "../styles";

interface FormValues {
  name: string;
}

const EditProfileForm = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      name: "",
    },
    resolver: yupResolver(EditProfileValidationSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log("data", data);
  };

  return (
    <FormContainer>
      <InputContainer>
        <Item>
          <Typography>Your Name</Typography>
          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <Input
                variant="variant1"
                placeholder="Charlene Reed"
                {...field}
              />
            )}
          />
        </Item>
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
