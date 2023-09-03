import React, { useState, useEffect, useRef } from "react";
import { InputBase, Box, styled, List, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const SearchContainer = styled(Box)(({ theme }) => ({
  background: "#fff",
  width: "550px",
  borderRadius: "5px",
  marginLeft: "10px",
  display: "flex",
  border: "1px solid #000",
  [theme.breakpoints.down("sx")]: {
    margin: 0,
    display: "flex",
    flexDirection: "row",
    width: "200px",
  },
  [theme.breakpoints.down("md")]: {
    margin: 0,
    display: "flex",
    flexDirection: "row",
    width: "340px",
  },
}));
const InputSearchBase = styled(InputBase)(({ theme }) => ({
  paddingLeft: "20px",
  width: "100%",
  fontSize: "unset",
  [theme.breakpoints.down("lg")]: {
    display: "flex",
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
    fontSize: "10px",
  },
  [theme.breakpoints.down("sx")]: {
    display: "flex",
    fontSize: "10px",
  },
}));

// const SearchIconWrapper = styled(Box)`
//   color: #ff6900;
//   padding: 5px;
//   display: flex;
// `;
const SearchIconWrapper = styled(Box)(({ theme }) => ({
  color: "#ff6900",
  padding: "5px",
  display: "flex",
}));

// const ListWrapper = styled(List)`
//   position: absolute;
//   background: #fff;
//   color: #000;
//   margin-top: 36px;
//   z-index: 999;
// `;
const ListWrapper = styled(List)(({ theme }) => ({
  position: "absolute",
  background: "#fff",
  color: "#000",
  marginTop: "36px",
  zIndex: "999",

  [theme.breakpoints.down("sx")]: {
    fontSize: "12px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "12px",
  },
}));

const Search = () => {
  const searchRef = useRef();
  const [query, setQuery] = useState(["ghcghcc", "jhbjhbhu", "hjjnkj"]);
  const { id } = useParams();
  const dispatch = useDispatch();

  const compare = () => {
    // let comparedata = getdata.filter((e) => {
    //   return e.id == id;
    // });
    // setQuery(comparedata);
  };

  // const send = (e) => {
  //   searchRef.current.style.display = "none";

  //   dispatch(DISPLAY(e));
  // };

  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for products, brands and more"
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {query && (
        <ListWrapper ref={searchRef}>
          {/* {productsData
            .filter((data) => data.title.toLowerCase().includes(query))
            .map((data, index) => (
              <ListItem key={index}>
                <Link
                  to={`/cart/${data.id}`}
                  onClick={() => send(data)}
                  style={{
                    textDecoration: "none",
                    color: "#000",
                    zIndex: "999",
                  }}
                >
                  {data.title}
                </Link>
              </ListItem>
            ))} */}
        </ListWrapper>
      )}
    </SearchContainer>
  );
};

export default Search;
