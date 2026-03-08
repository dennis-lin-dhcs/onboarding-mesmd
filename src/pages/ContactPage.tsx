import { Link, Paper, Stack, Typography } from '@mui/material'

export default function ContactPage() {
  return (
    <Paper sx={{ p: 3 }}>
      <Stack spacing={1}>
        <Typography variant="h4">Contact</Typography>
        <Typography color="text.secondary">
          For all questions, comments and feedback, please send an email to
          {" "}<Link href="mailto:dennis.lin@dhcs.ca.gov">Dennis Lin</Link>, or {" "}
          <Link href="https://slack.com/app_redirect?channel=U0ACHGS44D8">drop a Slack message</Link>.
        </Typography>
      </Stack>
    </Paper>
  )
}
