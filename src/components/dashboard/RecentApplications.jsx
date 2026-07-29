import { applications } from "../../data/mockData";

import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Divider,
} from "@mui/material";

function RecentApplications() {

    const recentApplications = applications.slice(0,3);

    const getStatusColor = (status) => {
  switch (status) {
    case "Applied":
      return "primary";

    case "Interview Scheduled":
      return "warning";

    case "Rejected":
      return "error";

    case "Offer":
      return "success";

    default:
      return "default";
  }
};

  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>
        {recentApplications.map((application, index) => (
  <Box key={application.id} sx={{ py: 2 }}>

    <Typography variant="subtitle1" fontWeight="bold">
      {application.company}
    </Typography>

    <Typography variant="body2" color="text.secondary">
      {application.role}
    </Typography>

    <Chip
      label={application.status}
  color={getStatusColor(application.status)}
      size="small"
      sx={{ mt: 1 }}
    />

    {index !== recentApplications.length - 1 && (
      <Divider sx={{ mt: 2 }} />
    )}
  </Box>
))}
        
      </CardContent>
    </Card>
  );
}

export default RecentApplications;
