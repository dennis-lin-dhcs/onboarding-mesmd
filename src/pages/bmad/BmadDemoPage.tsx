import { Paper, Stack, Typography } from '@mui/material'

export default function BmadDemoPage() {
  return (
    <Paper sx={{ p: 3 }}>
      <Stack spacing={1}>
        <Typography variant="h4">BMAD - Demo</Typography>
        <Typography color="text.secondary">BMAD demo.</Typography>
      </Stack>
    </Paper>
  )
}
