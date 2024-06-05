// import { Doctor } from "@/types/doctor";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

const DonorCard = ({ donor }: any) => {
  // console.log("donor = ", donor);
  const avatar = "https://i.ibb.co/Xy3r8MX/avatar.png";

  return (
    <Card sx={{ maxWidth: 345, maxHeight: 580, borderRadius: "8px" }}>
      <CardMedia
        component="img"
        alt="Donor Image"
        height="140"
        image={donor?.profilePicture ? donor.profilePicture : avatar}
        style={{ objectFit: "cover", height: 300 }}
      />
      <CardContent sx={{ padding: "30px" }}>
        <Typography gutterBottom variant="h5" component="p">
          Name: {donor?.name}
        </Typography>
        <Typography gutterBottom component="p">
          Email: {donor?.email}
        </Typography>
        <Typography gutterBottom component="p">
          Blood Group: {donor?.bloodType}
        </Typography>
        <Typography gutterBottom component="p">
          Location: {donor?.location}
        </Typography>
        <Typography gutterBottom component="p">
          Availability: {donor?.status}
        </Typography>

        <Divider />
        <Button
          size="medium"
          sx={{
            marginTop: "15px",
            display: "flex",
            backgroundColor: "secondary.main",
          }}
          component={Link}
          href={`/donors/${donor.id}`}
        >
          Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default DonorCard;
