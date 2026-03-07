import { Paper, Stack, Typography } from '@mui/material'

export default function AboutPage() {
  return (
    <Paper sx={{ p: 3 }}>
      <Stack spacing={1}>
        <Typography variant="h4">About</Typography>
        <Typography color="text.secondary">
          About page.
        </Typography>
      </Stack>
    </Paper>
  )
}
