import { Card, CardContent, Box, Typography, Button } from "@mui/material";

export const GridCard = () => {
  return (
    <Card sx={{ width: "min-content" }}>
      <CardContent>
        <Box
          display="grid"
          gridTemplateColumns="4em 26em"
          gridTemplateRows="2fr 1fr 2fr"
          borderRadius="10px"
          border="1px solid black"
        >
          <Box
            sx={{
              backgroundColor: "red",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height:"100%"
            }}
          >
            Avatar
          </Box>
          <Box sx={{ backgroundColor: "black", color: "white", border: '1px solid yellow' }}>
            <Box sx={{ backgroundColor: "orange", color: "white" }}>
              <Typography>Full name</Typography>
            </Box>
            <Box sx={{ backgroundColor: "green", color: "white" }}>
              <Typography>Headline</Typography>
            </Box>
            <Box
              display="flex"
              sx={{ backgroundColor: "inherit", color: "white" }}
            >
              <Button variant="contained" color="secondary">
                View
              </Button>
              <Button variant="contained" color="secondary">
                Connect
              </Button>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
