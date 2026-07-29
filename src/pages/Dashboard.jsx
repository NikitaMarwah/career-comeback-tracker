import { applications, contacts } from "../data/mockData";

import ActionRequired from "../components/dashboard/ActionRequired";
import RecentApplications from "../components/dashboard/RecentApplications";
import UpcomingInterviews from "../components/dashboard/UpcomingInterviews";

import {
  Container,
  Typography,
  Grid,
} from "@mui/material";

function Dashboard() {
  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
      >
        Dashboard
      </Typography>

      <ActionRequired
        applications={applications}
        contacts={contacts}
      />

      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <RecentApplications />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <UpcomingInterviews />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;