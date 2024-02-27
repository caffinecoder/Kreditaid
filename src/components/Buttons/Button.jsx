import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const CustomButton = ({ children, ...props }) => {
  const theme = useTheme();
  return (
    <div>
      <Button
        {...props}
        sx={{
          borderRadius: "6px",
          backgroundColor: "var(--primary-btn-bg-color)",
          color: "var(--secondary-color)",
          position: "relative",
          fontWeight: "500",
          fontFamily: "Poppins, sans-serif;",
          lineHeight: "0.9",
          fontSize: "0.9rem",
          padding: "11px 20px",
          textTransform: "capitalize",
          "&:hover": {
            backgroundColor: "var(--primary-btn-hover-color)",
          },
        }}
      >
        {children}
      </Button>
    </div>
  );
};

export default CustomButton;
