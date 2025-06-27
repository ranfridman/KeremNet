import { IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./OptionMenu.css";  
const ITEM_HEIGHT = 48;

interface OptionMenuStruct {
  label: string;
  option: () => void;
}

export interface OptionMenuProps {
  optionsMenu: OptionMenuStruct[];
}

const OptionMenu: React.FC<OptionMenuProps> = ({ optionsMenu }) => {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="option-menu">
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          },
          list: {
            "aria-labelledby": "long-button",
          },
        }}
      >
        {optionsMenu.map((option) => (
          <MenuItem key={option.label} onClick={option.option}>
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default OptionMenu;
