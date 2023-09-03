import React from "react";
import {
  Box,
  Button,
  styled,
  MenuItem,
  MenuList,
  Popper,
  Paper,
  ClickAwayListener,
  Grow,
} from "@mui/material";
import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

import NavProduct from "./NavProduct";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  position: "relative",
  zIndex: 99,
  margin: "0 3% 0 auto",
  "& > *": {
    marginRight: "40px !important",
    fontSize: "16px",
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
  [theme.breakpoints.down("sx")]: {
    display: "flex",
  },
}));

const ShoppingMenu = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = React.useRef(null);
  //   const { account, setAccount } = useContext(DataContext);

  //   const { cartItems } = useSelector((state) => state.cart);
  //   console.log(cartItems);
  //   const openDialog = () => {
  //     setOpens(true);
  //   };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Wrapper>
      <Button
        style={{
          marginTop: 2,
          color: "#000",
          background: "#ff6900",
          width: "160px",
          height: "auto",
        }}
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        Shop
      </Button>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem onClick={handleClose}>
                    <NavProduct />
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Wrapper>
  );
};

export default ShoppingMenu;
