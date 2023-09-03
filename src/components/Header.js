import React, { useEffect, useRef, useState } from "react";
import { BsCartFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import Search from "./Search";
import Cart from "../cart.gif";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/esm/Table";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useContext } from "react";
import { DataContext } from "../context/authContext";
import {
  DecreaseItem,
  IncreaseItem,
  REMOVE,
  GetCartData,
} from "../redux/actions/cartAction";
import { getAllPost } from "../redux/actions/PostAction";

const Header = () => {
  const history = useNavigate();
  const [price, setPrice] = useState(0);
  console.log(price);
  const { carts } = useSelector((state) => state.cartReducers);
  const { ProductData } = useSelector((state) => state.ProductReducer);
  const { PostData } = useSelector((state) => state.PostReducer);
  const [footerData, setFooterData] = useState();

  console.log("carts:::::::::::::------->>>>>", carts);

  const { userDetails, setUserDetails, setAccountStatus } =
    useContext(DataContext);

  const dispatch = useDispatch();

  const handleIncrease = (data) => {
    dispatch(IncreaseItem(data));
  };

  const handleDec = (data) => {
    dispatch(DecreaseItem(data));
  };
  const handleRemove = (data) => {
    dispatch(REMOVE(data));
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event?.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("refreshtoken");
    setUserDetails();
  };

  const handleCheckOut = (e) => {
    e.preventDefault();
    handleClose();
    userDetails ? setAccountStatus(true) : setAccountStatus(false);
    userDetails ? history("/checkout") : history("/login");
  };
  useEffect(() => {
    dispatch(GetCartData());
  }, [dispatch]);

  useEffect(() => {
    let p = 0;
    carts.map((ele) => {
      let product = ProductData?.find((e) => ele?.product_id === e?._id);
      p =
        (product?.product_price -
          (product?.product_price * product?.product_discount) / 100) *
          ele?.total_count +
        p;
    });
    setPrice(p.toFixed(2));
  }, [dispatch, setPrice, carts]);

  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);

  useEffect(() => {
    setFooterData(PostData.filter((data) => data.categorie === "Logo"));
  }, [setFooterData, PostData]);
  console.log("footerData::::::::::::::::::::::::::::::::::::", footerData);
  return (
    <>
      <div className="container-fluid">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            {footerData?.length > 0 &&
              footerData?.map((data, index) => {
                if (data?.categorie === "Logo") {
                  return (
                    <Link to="/" className="logo">
                      <img
                        src={`${process.env.REACT_APP_BACKEND_URL}/images/${
                          data?.post_image ? data?.post_image[0] : ""
                        }`}
                        alt=""
                        style={{ width: "65px", height: "65px" }}
                      />
                    </Link>
                  );
                }
              })}

            <Navbar.Brand>
              <Search />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto menu-link">
                <NavDropdown
                  title="Shop"
                  id="basic-nav-dropdown"
                  style={{ color: "#ff6900", fontWeight: 600 }}
                  className="list"
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/collection/hair-toppers"
                    style={{ background: "#fff" }}
                  >
                    <Link
                      to="/collection/hair-toppers"
                      style={{
                        textDecoration: "none",
                        color: "#ff6900",
                      }}
                    >
                      Hair Topper
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/collection/all-things-hair"
                    style={{ background: "#fff" }}
                  >
                    <Link
                      to="/collection/all-things-hair"
                      style={{ textDecoration: "none", color: "#ff6900" }}
                    >
                      {" "}
                      All Things Hair{" "}
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/collection/strandouts"
                    style={{ background: "#fff" }}
                  >
                    <Link
                      to="/collection/strandouts"
                      style={{ textDecoration: "none", color: "#ff6900" }}
                    >
                      Strandouts
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/collection/clip-in-bangs"
                    style={{ background: "#fff" }}
                  >
                    <Link
                      to="/collection/clip-in-bangs"
                      style={{ textDecoration: "none", color: "#ff6900" }}
                    >
                      Clip In Bangs
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/collection/wigs"
                    style={{ background: "#fff" }}
                  >
                    <Link
                      to="/collection/wigs"
                      style={{ textDecoration: "none", color: "#ff6900" }}
                    >
                      Wigs
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/collection/hair-extension"
                    style={{ background: "#fff" }}
                  >
                    <Link
                      to="/collection/hair-extension"
                      style={{ textDecoration: "none", color: "#ff6900" }}
                    >
                      Hair Extension
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/collection/accessories"
                    style={{ background: "#fff" }}
                  >
                    <Link
                      to="/collection/accessories"
                      style={{ textDecoration: "none", color: "#ff6900" }}
                    >
                      Accessories
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/collection/halo-hair"
                    style={{ background: "#fff" }}
                  >
                    <Link
                      to="/collection/halo-hair"
                      style={{ textDecoration: "none", color: "#ff6900" }}
                    >
                      Halo Hair
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
                <Link
                  to="/help-me"
                  style={{
                    color: "#000",
                    fontWeight: 600,
                    textDecoration: "none",
                    padding: "10px",
                  }}
                >
                  Help Me
                </Link>
                <Link
                  to="/about-us"
                  style={{
                    color: "#000",
                    fontWeight: 600,
                    textDecoration: "none",
                    padding: "10px",
                  }}
                >
                  About Us
                </Link>
                <Link
                  to="/contact-us"
                  style={{
                    color: "#000",
                    fontWeight: 600,
                    textDecoration: "none",
                    padding: "10px",
                  }}
                >
                  Contact Us
                </Link>

                {userDetails ? (
                  <NavDropdown
                    title={userDetails ? userDetails?.first_name : ""}
                    id="basic-nav-dropdown"
                    style={{ color: "#ff6900", fontWeight: 600 }}
                    className="list"
                  >
                    <NavDropdown.Item
                      as={Link}
                      to="/customer/account/user-profile"
                      style={{ background: "#fff" }}
                    >
                      <Link
                        to="/customer/account/user-profile"
                        style={{ textDecoration: "none", color: "#ff6900" }}
                      >
                        Profile
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Link}
                      to="/"
                      style={{ background: "#fff" }}
                      onClick={(e) => handleLogout(e)}
                    >
                      <Link
                        to="/"
                        style={{ textDecoration: "none", color: "#ff6900" }}
                      >
                        Logout
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <Link
                    to="/login"
                    style={{
                      color: "#000",
                      fontWeight: 600,
                      textDecoration: "none",
                      padding: "10px",
                    }}
                  >
                    Login
                  </Link>
                )}

                {/* <Link
                  to="/login"
                  style={{
                    color: "#000",
                    fontWeight: 600,
                    textDecoration: "none",
                    padding: "10px",
                  }}
                >
                  Login
                </Link> */}
              </Nav>
            </Navbar.Collapse>
            <Navbar.Brand className="cart">
              {" "}
              <Badge
                badgeContent={carts?.length}
                color="warning"
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                style={{ color: "#000" }}
              >
                <BsCartFill color="#ff6900" size="30px" />
              </Badge>
            </Navbar.Brand>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <div
                className="card_details d-flex justify-content align-center"
                style={{
                  width: "24rem",
                  padding: 10,
                  position: "relative",
                }}
              >
                <AiOutlineClose
                  onClick={handleClose}
                  style={{
                    position: "absolute",
                    top: 2,
                    right: 20,
                    fontSize: 23,
                    cursor: "pointer",
                    className: "badgeClose",
                  }}
                />
              </div>
              {carts?.length ? (
                <div
                  className="card_details"
                  style={{ width: "24rem", padding: 10 }}
                >
                  <Table>
                    <thead>
                      <tr>
                        <th>Photo</th>
                        <th>Products</th>
                      </tr>
                    </thead>
                    <tbody>
                      {carts?.map((d) => {
                        const product = ProductData?.find(
                          (e) => d?.product_id === e?._id
                        );

                        return (
                          <div key={d?.product_id}>
                            {product ? (
                              <>
                                <tr>
                                  <td>
                                    <NavLink to={`/cart/${product?._id}`}>
                                      <img
                                        src={`${process.env.REACT_APP_BACKEND_URL}/images/${product?.product_image[0]}`}
                                        style={{
                                          width: "7rem",
                                          height: "8rem",
                                        }}
                                        alt=""
                                      />
                                    </NavLink>
                                  </td>
                                  <td>
                                    <p>{product?.product_title}</p>
                                    <p>
                                      Price :{" "}
                                      {(
                                        product?.product_price -
                                        (product?.product_price *
                                          product?.product_discount) /
                                          100
                                      ).toFixed(2)}
                                    </p>
                                    <p>
                                      Total Amt :{" "}
                                      {(
                                        (product?.product_price -
                                          (product?.product_price *
                                            product?.product_discount) /
                                            100) *
                                        d?.total_count
                                      ).toFixed(2)}
                                    </p>
                                    <p>
                                      Quantity : <b>{d?.total_count}</b>
                                    </p>

                                    <div
                                      className="mt-5 d-flex justify-content-between align-items-center increaseProducts mx-2"
                                      style={{
                                        width: 100,
                                        cursor: "pointer",
                                        background: "#ddd",
                                        border: "1px solid #ff6900",
                                        borderRadius: "50px",
                                        color: "#111",
                                        marginBottom: "10px",
                                      }}
                                    >
                                      <span
                                        style={{
                                          fontSize: 24,
                                          marginLeft: "10px",
                                          padding: "5px",
                                          cursor: "pointer",
                                        }}
                                        onClick={() => handleDec(d)}
                                      >
                                        -
                                      </span>
                                      <span style={{ fontSize: 24 }}>
                                        {d?.total_count}
                                      </span>
                                      <span
                                        style={{
                                          fontSize: 24,
                                          marginRight: "10px",
                                          padding: "5px",
                                          cursor: "pointer",
                                        }}
                                        onClick={() => handleIncrease(d)}
                                      >
                                        +
                                      </span>
                                    </div>

                                    <p
                                      style={{
                                        color: "red",
                                        fontSize: 20,
                                        cursor: "pointer",
                                      }}
                                      onClick={() => handleRemove(d)}
                                    >
                                      <i className="fas fa-trash smalltrash"></i>
                                    </p>
                                  </td>
                                  <td
                                    className="mt-5"
                                    style={{
                                      color: "red",
                                      fontSize: 20,
                                      cursor: "pointer",
                                    }}
                                    onClick={() => handleRemove(d)}
                                  >
                                    <i className="fas fa-close largeclose"></i>
                                  </td>
                                </tr>
                              </>
                            ) : null}
                          </div>
                        );
                      })}
                      <tr>
                        <td>
                          <div className="d-flex justify-content-center align-items-center">
                            <Button
                              style={{
                                background: "#ff6900",
                                color: "#fff",
                                border: "1px solid #ff6900",
                              }}
                              onClick={(e) => handleCheckOut(e)}
                            >
                              Checkout
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <p className="text-center">Total : ₹ {price}</p>
                    </tbody>
                  </Table>
                </div>
              ) : (
                <div
                  className="card_details d-flex justify-content align-center"
                  style={{ width: "24rem", padding: 10, position: "relative" }}
                >
                  <p style={{ fontSize: 16 }}>Your Cart is Empty</p>
                  <img
                    src={Cart}
                    alt=""
                    className="emptycart_img"
                    style={{
                      width: "5rem",
                      padding: 10,
                      height: "80px",
                      marginLeft: 80,
                    }}
                  />
                </div>
              )}
            </Menu>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
