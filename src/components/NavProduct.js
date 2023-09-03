import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { navData } from "../Constants/Data";

const Component = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "55px 130px 0 130px",
  justifyContent: "space-between",
  margin: "5px 20px",
  padding: "10px 10px",
  overflow: "hidden",
  [theme.breakpoints.down("lg")]: {
    margin: 0,
  },
}));

const Container = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;

const Text = styled(Typography)`
  font-size: 12px;
  font-weight: 600;
  font-family: inherit;
  inline-size: max-content;
`;

const NavProduct = () => {
  return (
    <Box style={{ background: "#fff" }}>
      <Component>
        {navData?.map((data, index) => (
          <Container key={index}>
            <img src={data.url} alt="nav" style={{ width: 64 }} />
            <Text>{data.text}</Text>
          </Container>
        ))}
      </Component>
    </Box>
  );
};

export default NavProduct;
