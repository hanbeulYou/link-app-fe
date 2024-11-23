import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PersonIcon from "@mui/icons-material/Person";

type IconType =
  | "Search"
  | "Notification"
  | "Hamburger"
  | "Back"
  | "Home"
  | "Add"
  | "Person";

interface IconProps {
  icon: IconType;
  size?: string;
}

const iconMap = {
  Search: SearchIcon,
  Notification: NotificationsIcon,
  Hamburger: DensityMediumIcon,
  Back: KeyboardBackspaceIcon,
  Home: HomeIcon,
  Add: AddCircleIcon,
  Person: PersonIcon,
};

export const Icon: React.FC<IconProps> = ({ icon, size = "24px" }) => {
  const IconComponent = iconMap[icon];

  return <IconComponent sx={{ width: size, height: size }} />;
};
