import { StyledPostSettings, SettingButton } from "./More.style";

interface PostSettingsProps {
  onEditClick?: () => void;
  onDeleteClick?: () => void;
}

export const PostSettings = ({ onEditClick, onDeleteClick }: PostSettingsProps) => {
  return (
    <StyledPostSettings className="open"> 
      <SettingButton onClick={onDeleteClick}>Удалить</SettingButton>
      <SettingButton onClick={onEditClick}>Изменить</SettingButton>
    </StyledPostSettings>
  );
};
