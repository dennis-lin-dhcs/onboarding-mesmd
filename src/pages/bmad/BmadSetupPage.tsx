import { Paper, Stack, Typography } from '@mui/material'

export default function BmadSetupPage() {
  return (
    <Paper sx={{ p: 3 }}>
      <Stack spacing={1}>
        <Typography variant="h4">BMAD - Setup</Typography>
        <Typography color="text.secondary">BMAD setup.</Typography>
      </Stack>
    </Paper>
  )
}
