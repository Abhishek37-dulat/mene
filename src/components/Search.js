import React, { useState, useEffect, useRef } from "react";
import { InputBase, Box, styled, List, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleProduct } from "../redux/actions/productAction";

const SearchContainer = styled(Box)(({ theme }) => ({
  background: "#fff",
  width: "550px",
  borderRadius: "5px",
  marginLeft: "10px",
  display: "flex",
  boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
  [theme.breakpoints.down("md")]: {
    margin: 0,
    marginLeft: "15px",
    display: "flex",
    flexDirection: "row",
    width: "240px",
  },
  [theme.breakpoints.down("sm")]: {
    margin: 0,
    display: "flex",
    flexDirection: "row",
    width: "150px",
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
  const [query, setQuery] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const { ProductData } = useSelector((state) => state.ProductReducer);

  const compare = () => {
    // let comparedata = getdata.filter((e) => {
    //   return e.id == id;
    // });
    // setQuery(comparedata);
  };

  const send = (e) => {
    searchRef.current.style.display = "none";
    setQuery("");
    dispatch(getSingleProduct(e));
  };
  // useEffect(() => {
  //   const data = ProductData?.map((data) => {
  //     return data?.product_title;
  //   });
  //   setQuery(data);
  // }, [setQuery, ProductData]);

  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for products, brands and more"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {query && (
        <ListWrapper ref={searchRef}>
          {ProductData?.filter((data) =>
            data.product_title.toLowerCase().includes(query)
          ).map((data, index) => (
            <ListItem key={index}>
              <Link
                to={`/cart/${data._id}`}
                onClick={() => send(data)}
                style={{
                  textDecoration: "none",
                  color: "#000",
                  zIndex: "999",
                }}
              >
                {data.product_title}
              </Link>
            </ListItem>
          ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
};

export default Search;
