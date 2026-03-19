import {Link, Paper, Stack, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Typography} from '@mui/material'

export default function LocalNeedsAssessmentPage() {
  return (
    <Paper sx={{ p: 3 }}>
      <Stack spacing={1}>
        <Typography variant="h4">Integrated Plans - Local Needs Assessment</Typography>
        <video
          controls
          style={{ width: "100%", maxWidth: 700 }}
        >
          <source src={import.meta.env.BASE_URL + "video.mov"} type="video/mp4" />
        </video>
      </Stack>
    </Paper>
  )
}
