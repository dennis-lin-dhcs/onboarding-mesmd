import { Paper, Stack, Typography } from '@mui/material'

export default function ContactPage() {
  return (
    <Paper sx={{ p: 3 }}>
      <Stack spacing={1}>
        <Typography variant="h4">Contact</Typography>
        <Typography color="text.secondary">
          Contact page.
        </Typography>
      </Stack>
    </Paper>
  )
}
