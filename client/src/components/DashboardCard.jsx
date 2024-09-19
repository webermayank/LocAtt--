import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const DashboardCard = ({ title, value }) => {
  return (
    <Card className="w-full">
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="h4" className="mt-2">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
