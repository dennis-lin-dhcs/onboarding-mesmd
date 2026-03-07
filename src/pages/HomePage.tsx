import { Paper, Stack, Typography } from '@mui/material'

export default function HomePage() {
  return (
    <Paper sx={{ p: 3 }}>
      <Stack spacing={1}>
        <Typography variant="h4">Home</Typography>
        <Typography color="text.secondary">
          This layout uses a dedicated app shell, route configuration, and page components.
        </Typography>
      </Stack>
    </Paper>
  )
}
