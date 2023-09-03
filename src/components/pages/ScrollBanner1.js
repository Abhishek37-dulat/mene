import { Box, styled } from "@mui/material";
import React from "react";
import Cards from "../Cards";

const Component = styled(Box)`
  display: flex;
`;
const LeftComponent = styled(Box)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
// const RightComponent = styled(Box)(({ theme }) => ({
//   background: "#fff",
//   padding: 5,
//   marginTop: 10,
//   marginLeft: 10,
//   width: "17%",
//   textAlign: "center",
//   [theme.breakpoints.down("md")]: {
//     display: "none",
//     width: "0%",
//   },
// }));

const MidSlide = () => {
  const adURL =
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/hair-style-roll-up-banner-design-template-065215a93ec234cd6228df220eee662f_screen.jpg?ts=1633135661";
  return (
    <Component>
      <LeftComponent>
        <Cards />
      </LeftComponent>
      {/* <RightComponent>
        <img
          src={adURL}
          alt="ad"
          style={{ width: 217, height: 410, marginTop: 90 }}
        />
      </RightComponent> */}
    </Component>
  );
};

export default MidSlide;
