import React, { useRef, useState } from "react";
import {
  AvatarContainer,
  AvatarContainerMobile,
  Container,
  ContainerTop,
} from "./styles";
import Avatar from "../../avatar";
import IconButton from "../../icon-button";
import EditProfileForm from "./form";

const EditProfile = () => {
  const [avatarUrl, setAvatarUrl] = useState<string>(
    "/assets/image/avatar.svg"
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatarUrl(imageUrl);
    }
  };

  const openFileSelector = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Container>
      <ContainerTop>
        <AvatarContainer>
          <Avatar url={avatarUrl} size={130} />
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
          <Avatar url={avatarUrl} size={170} />
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
        <EditProfileForm />
      </ContainerTop>
    </Container>
  );
};

export default EditProfile;
