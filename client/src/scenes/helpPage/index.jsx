import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Navbar from "scenes/navbar";

const HelpPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box>
      <Navbar />
      </Box>
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h1" sx={{ mb: "1.5rem" }}>
          Welcome to Bunker Labs!
        </Typography>
        <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/BL_logo.png"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      </Box>
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h2" sx={{ mb: "1.5rem" }}>
          Mission Statement
        </Typography>
        <Typography fontWeight="100" variant="h5" sx={{ mb: "1.5rem" }}>
          Insert Mission Statement Here
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h2" sx={{ mb: "1.5rem" }}>
          Contact Us?
        </Typography>
        <Typography fontWeight="100" variant="h5" sx={{ mb: "1.5rem" }}>
          Insert Pizza Hut's Phone Number
        </Typography>
      </Box>
    </Box>
  );
};

export default HelpPage;
