import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>New Partners</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/BL_logo.png"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Bunker Labs</Typography>
        <Typography color={medium}>bunkerlabs.org</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      Bunker Labs provides community, programs, and courses to help military veterans and military spouses start and grow successful businesses and startups.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
