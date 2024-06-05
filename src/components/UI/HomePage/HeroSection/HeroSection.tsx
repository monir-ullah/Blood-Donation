import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import blood1 from "@/assets/images/blood2.jpg";
import bloodGift from "@/assets/images/blood-donate.jpg";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${blood1.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          transform: "scaleX(-1)",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        },
      }}
    >
      <Container
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          py: 16,
          gap: 10,
        }}
      >
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              textAlign: "left",
              margin: "20px auto",
              fontSize: {
                xs: "24px",
                sm: "24px",
                md: "32px",
                lg: "40px",
              },
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              fontWeight={700}
              color="white"
              sx={{
                mb: 2,
                fontSize: {
                  xs: "24px",
                  sm: "24px",
                  md: "32px",
                  lg: "40px",
                },
              }}
            >
              Your blood can give someone another chance at life.
            </Typography>
          </Box>
          <Typography variant="body1" color="white" sx={{ mb: 4 }}>
            Donating blood is a powerful act of kindness that saves lives. Each
            pint you give can save up to three people, offering them a second
            chance to live and thrive. Your donation is a lifeline for those in
            need, turning despair into hope. Be a hero and give the gift of
            life. Your generosity can bring joy and new beginnings to countless
            families. Donate blood today and make a lasting impact.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: {
                xs: "center",
                md: "flex-start",
                color: "white",
              },
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "column",
                lg: "row",
              },
              width: {
                xs: "100%",
                sm: "100%",
                md: "100%",
              },
            }}
          >
            <Link href="/donors" passHref>
              <Button
                variant="contained"
                // color="primary"
                sx={{ py: 1.5, px: 3 }}
              >
                Donate Now
              </Button>
            </Link>
            <Link href="/about" passHref>
              <Button
                variant="outlined"
                // color="primary"
                sx={{ py: 1.5, px: 3, borderWidth: 2 }}
              >
                Learn More
              </Button>
            </Link>
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: { xs: 4, md: 0 },
            position: "relative",
          }}
        >
          <Box
            sx={{
              // width: { xs: 300, sm: 400, md: 500 },
              // height: { xs: 300, sm: 400, md: 500 },
              borderRadius: "5%",
              overflow: "hidden",
              boxShadow: 6,
            }}
          >
            <Image
              src={bloodGift}
              layout="responsive"
              alt="blood donation hero"
              width={500}
              height={800}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
