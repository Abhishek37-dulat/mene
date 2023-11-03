import { Box, Typography, styled } from "@mui/material";
import React, { useEffect } from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import PlaceIcon from "@mui/icons-material/Place";
import { useDispatch, useSelector } from "react-redux";
import { getSingleContacts } from "../../redux/actions/ContactAction";

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  backgroundColor: "#282828",
  color: "#fff",
  "& > div": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    padding: "10px",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const Topnavbar = ({ ContactData }) => {
  const dispatch = useDispatch();
  const { SingleContactData } = useSelector((state) => state.ContactReducer);

  useEffect(() => {
    let tempdata = JSON.parse(localStorage.getItem("ewfsdfjwhk3j2nkj4h23ui23"));

    dispatch(getSingleContacts(tempdata?._id));
    localStorage.removeItem("ewfsdfjwhk3j2nkj4h23ui23");
    localStorage.setItem("ewfsdfjwhk3j2nkj4h23ui23", JSON.stringify(tempdata));
  }, [dispatch]);
  return (
    <MainBox>
      <Box>
        <Typography>
          <AcUnitIcon style={{ color: "#ff6900", fontSize: "24px" }} /> Surgical
          & Non Surgical Hair Replacement Clinic
        </Typography>
      </Box>
      <Box>
        <Typography>
          <PlaceIcon style={{ color: "#ff6900", fontSize: "24px" }} />
          {SingleContactData
            ? SingleContactData?.address
            : ContactData[0]?.address}
        </Typography>
      </Box>
    </MainBox>
  );
};

export default Topnavbar;
