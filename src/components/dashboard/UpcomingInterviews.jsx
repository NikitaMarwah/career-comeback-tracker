import { applications } from "../../data/mockData";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Divider,
} from "@mui/material";

function UpcomingInterviews (){

    const upcomingInterviews = applications.filter(
        (applications) => applications.status === "Interview Scheduled"
    )
    return (
  <Card sx={{ mt: 3 }}>
    <CardContent>
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Upcoming Interviews
      </Typography>

      {upcomingInterviews.length === 0 ? (
        <Typography color="text.secondary">
          No upcoming interviews
        </Typography>
      ) : (
        upcomingInterviews.map((application, index) => (
          <Box key={application.id} sx={{ py: 1.5 }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="subtitle1" fontWeight="bold">
                {application.company}
              </Typography>

              <Chip
                label={application.interview.mode}
                color="success"
                size="small"
              />
            </Box>

            <Typography color="text.secondary">
              {application.role}
            </Typography>

            <Typography variant="body2" sx={{ mt: 1 }}>
              📅 {application.interview.date}
            </Typography>

            <Typography variant="body2">
              🕒 {application.interview.time}
            </Typography>

            {index !== upcomingInterviews.length - 1 && (
              <Divider sx={{ mt: 2 }} />
            )}
          </Box>
        ))
      )}
    </CardContent>
  </Card>
);
}

export default UpcomingInterviews;