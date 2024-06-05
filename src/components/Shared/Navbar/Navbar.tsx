"use client";

import useUserInfo from "@/hooks/useUserInfo";
import { logoutUser } from "@/services/actions/logoutUser";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import bloodLogo from "@/assets/images/blood-donation-logo.png";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import { useState } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Navbar = () => {
  const userInfo = useUserInfo();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogOut = () => {
    logoutUser(router);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ my: 2 }}>
        <Link href="/">
          <Box className="logo-image">
            <Image src={bloodLogo} alt="Logo" width={300} height={200} />
          </Box>
        </Link>
      </Box>
      <Divider />
      <List>
        <ListItem button component={Link} href="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} href="/donors">
          <ListItemText primary="Donors" />
        </ListItem>
        <ListItem button component={Link} href="/about">
          <ListItemText primary="About Us" />
        </ListItem>
        {userInfo?.userId && (
          <ListItem button component={Link} href="/dashboard">
            <ListItemText primary="Dashboard" />
          </ListItem>
        )}
        {userInfo?.userId ? (
          <>
            <ListItem button component={Link} href="/dashboard/profile">
              <ListItemText primary="My Profile" />
            </ListItem>
            <ListItem button onClick={handleLogOut}>
              <ListItemText primary="Logout" />
            </ListItem>
          </>
        ) : (
          <ListItem button component={Link} href="/login">
            <ListItemText primary="Login" />
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        bgcolor: "primary.light",
        position: "sticky",
        top: 0,
        zIndex: 999,
        boxShadow: "-4px 4px 7px #0000009c",
      }}
    >
      <Container>
        <Stack
          py={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexGrow: 1,
            }}
          >
            <Box
              sx={{
                overflow: "hidden",

                display: { xs: "none", sm: "block" },
              }}
            >
              <Link href="/">
                <Image
                  src={bloodLogo}
                  alt="Logo"
                  width={250}
                  height={150}
                  style={{ objectFit: "cover" }}
                />
              </Link>
            </Box>
          </Box>

          <Stack
            direction="row"
            justifyContent="space-between"
            gap={4}
            sx={{
              display: { xs: "none", md: "flex" },
              marginRight: {
                lg: 5,
              },
            }}
          >
            <Typography
              component={Link}
              href="/"
              color="primary.main"
              className="poppins-semibold nav-link-hover"
            >
              Home
            </Typography>
            <Typography
              component={Link}
              href="/donors"
              color="primary.main"
              className="poppins-semibold nav-link-hover"
            >
              Donors
            </Typography>
            <Typography
              component={Link}
              href="/about"
              color="primary.main"
              className="poppins-semibold nav-link-hover"
            >
              About Us
            </Typography>
            {userInfo?.userId && (
              <Typography
                component={Link}
                href="/dashboard"
                color="primary.main"
              >
                Dashboard
              </Typography>
            )}
          </Stack>

          {userInfo?.userId ? (
            <Stack
              direction="row"
              gap={2}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Button component={Link} href="/dashboard/profile">
                My Profile
              </Button>
              <Button
                color="error"
                onClick={handleLogOut}
                sx={{ boxShadow: 0 }}
              >
                Logout
              </Button>
            </Stack>
          ) : (
            <Button
              component={Link}
              href="/login"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              Login
            </Button>
          )}

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Stack>
      </Container>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar;
