import { Box, Paper, Stack, Typography } from '@mui/material'

export default function BmadGovernanceModelPage() {
  return (
    <Paper sx={{ p: 3 }}>
      <Stack spacing={2}>
        <Typography variant="h4">BMAD - Governance Model</Typography>
        <Typography color="text.secondary">
          BMAD compliance works best when each tool has a clear role. BMAD artifacts provide the
          planning and delivery context, GitHub manages collaboration and approval, Jira remains the
          operational source of record, and ownership rules define who can approve meaningful
          changes.
        </Typography>
        <Typography color="text.secondary">
          This model keeps AI-assisted delivery visible and reviewable. Requirements, architecture,
          personas, implementation changes, and approvals are all captured as versioned project
          assets or linked workflow records.
        </Typography>
        <Box
          component="ul"
          sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.7, m: 0, pl: 4 }}
        >
          <li>Use BMAD artifacts to document intent, constraints, and implementation guidance.</li>
          <li>Use GitHub pull requests as the auditable unit of proposed change.</li>
          <li>Use Jira to track delivery status, risk, and reporting across teams.</li>
          <li>Use ownership rules to make review responsibility explicit.</li>
        </Box>
      </Stack>
    </Paper>
  )
}
