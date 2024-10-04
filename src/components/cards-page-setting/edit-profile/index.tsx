import React, { useEffect, useRef, useState } from "react";
import {
  AvatarContainer,
  AvatarContainerMobile,
  ButtonContainer,
  Container,
  ContainerInner,
  ContainerTop,
  CustomButton,
  FormContainer,
  InputContainer,
} from "./styles";
import Avatar from "../../avatar";
import IconButton from "../../icon-button";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { EditProfileValidationSchema } from "./validation";
import Typography from "../../typography";
import Input from "../../input";
import Icon from "../../icon";
import { useUserData } from "@/src/hooks/data-profile";

interface FormValues {
  name: string;
  userName: string;
  email: string;
  password: string;
  date: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  avatarUrl?: string;
}

const EditProfile = () => {
  const { user, setUser } = useUserData();

  const [localAvatarUrl, setLocalAvatarUrl] = useState<string>(
    user.avatarUrl ?? "/assets/image/avatar.svg"
  );

  const [avatarUrl, setAvatarUrl] = useState<string>(
    user.avatarUrl ?? "/assets/image/avatar.svg"
  );

  useEffect(() => {
    const savedData = localStorage.getItem("profileData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      Object.keys(parsedData).forEach((key) => {
        setValue(key as keyof FormValues, parsedData[key]);
      });

      if (parsedData.avatarUrl) {
        setAvatarUrl(parsedData.avatarUrl);
        setLocalAvatarUrl(parsedData.avatarUrl);
      }
    }
  }, []);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: user.name || "",
      userName: user.userName || "",
      email: user.email || "",
      password: user.password || "",
      date: user.date || "",
      presentAddress: user.presentAddress || "",
      permanentAddress: user.permanentAddress || "",
      city: user.city || "",
      avatarUrl: user.avatarUrl || "",
    },
    resolver: yupResolver(EditProfileValidationSchema),
  });

  const onSubmit = (data: FormValues) => {
    const profileData = { ...data, avatarUrl: localAvatarUrl };
    localStorage.setItem("profileData", JSON.stringify(profileData));
    setUser(profileData);
    setAvatarUrl(localAvatarUrl);
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  // const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     const imageUrl = URL.createObjectURL(file);
  //     setAvatarUrl(imageUrl);
  //     setUser((prevUser) => ({ ...prevUser, avatarUrl: imageUrl }));
  //   }
  // };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const base64Image = reader.result as string;
        setLocalAvatarUrl(base64Image);
      };

      reader.readAsDataURL(file);
    }
  };

  const openFileSelector = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  return (
    <Container>
      <ContainerTop>
        <AvatarContainer>
          <Avatar url={localAvatarUrl} size={130} />
          <IconButton
            url="/assets/image/edit-profile.svg"
            size={30}
            iconSize={30}
            style={{ position: "absolute", right: 0, bottom: 25 }}
            onClick={openFileSelector}
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
        </AvatarContainer>

        <AvatarContainerMobile>
          <Avatar url={localAvatarUrl} size={170} />
          <IconButton
            url="/assets/image/edit-profile.svg"
            size={40}
            iconSize={40}
            style={{ position: "absolute", right: 0, bottom: 30 }}
            onClick={openFileSelector}
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleImageUpload}
          />
        </AvatarContainerMobile>

        <FormContainer>
          <InputContainer>
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <ContainerInner>
                  <Input
                    variant="variant1"
                    placeholder="Charlene Reed"
                    text="Your Name"
                    {...field}
                  />
                  {errors.name && (
                    <Typography error>{errors.name.message}</Typography>
                  )}
                </ContainerInner>
              )}
            />

            <Controller
              control={control}
              name="userName"
              render={({ field }) => (
                <ContainerInner>
                  <Input
                    variant="variant1"
                    placeholder="Charlene Reed"
                    text="User Name"
                    {...field}
                  />
                  {errors.userName && (
                    <Typography error>{errors.userName.message}</Typography>
                  )}
                </ContainerInner>
              )}
            />

            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <ContainerInner>
                  <Input
                    variant="variant1"
                    placeholder="charlenereed@gmail.com"
                    text="Email"
                    {...field}
                  />
                  {errors.email && (
                    <Typography error>{errors.email.message}</Typography>
                  )}
                </ContainerInner>
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({ field }) => (
                <ContainerInner>
                  <Input
                    type={isPasswordVisible ? "text" : "password"}
                    variant="variant1"
                    placeholder="**********"
                    text="Password"
                    {...field}
                  />
                  {errors.password && (
                    <Typography error>{errors.password.message}</Typography>
                  )}
                  <div
                    style={{
                      position: "absolute",
                      right: 15,
                      bottom: 5,
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      setIsPasswordVisible((presState) => !presState)
                    }
                  >
                    {isPasswordVisible ? (
                      <Icon name="closeEye" />
                    ) : (
                      <Icon name="openEye" />
                    )}
                  </div>
                </ContainerInner>
              )}
            />

            <Controller
              control={control}
              name="date"
              render={({ field }) => (
                <ContainerInner>
                  <Input
                    type="date"
                    variant="variant1"
                    placeholder=""
                    text="Date of Birth"
                    {...field}
                    max={today}
                  />{" "}
                  {errors.date && (
                    <Typography error>{errors.date.message}</Typography>
                  )}
                </ContainerInner>
              )}
            />

            <Controller
              control={control}
              name="presentAddress"
              render={({ field }) => (
                <ContainerInner>
                  <Input
                    variant="variant1"
                    placeholder="San Jose, California, USA"
                    text="Present Address"
                    {...field}
                  />{" "}
                  {errors.presentAddress && (
                    <Typography error>
                      {errors.presentAddress.message}
                    </Typography>
                  )}
                </ContainerInner>
              )}
            />

            <Controller
              control={control}
              name="permanentAddress"
              render={({ field }) => (
                <ContainerInner>
                  <Input
                    variant="variant1"
                    placeholder="San Jose, California, USA"
                    text="Permanent Address"
                    {...field}
                  />{" "}
                  {errors.permanentAddress && (
                    <Typography error>
                      {errors.permanentAddress.message}
                    </Typography>
                  )}
                </ContainerInner>
              )}
            />

            <Controller
              control={control}
              name="city"
              render={({ field }) => (
                <ContainerInner>
                  <Input
                    variant="variant1"
                    placeholder="San Jose"
                    text="City"
                    {...field}
                  />{" "}
                  {errors.city && (
                    <Typography error>{errors.city.message}</Typography>
                  )}
                </ContainerInner>
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
      </ContainerTop>
    </Container>
  );
};

export default EditProfile;
