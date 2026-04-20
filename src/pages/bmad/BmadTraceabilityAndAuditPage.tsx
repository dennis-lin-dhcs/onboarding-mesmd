import { Box, Paper, Stack, Typography } from '@mui/material'

export default function BmadTraceabilityAndAuditPage() {
  return (
    <Paper sx={{ p: 3 }}>
      <Stack spacing={2}>
        <Typography variant="h4">BMAD - Traceability and Audit</Typography>
        <Typography color="text.secondary">
          BMAD workflows can integrate with existing Jira instances by linking requirements,
          architecture decisions, pull requests, and implementation tasks back to the Jira issues
          that govern the work. This preserves the existing source of record while adding clearer
          AI-assisted delivery context.
        </Typography>
        <Typography color="text.secondary">
          Dashboards can use those links to show progress, review readiness, open risks, and audit
          evidence across teams. Jira remains the operational reporting layer, while GitHub and BMAD
          artifacts provide traceability for the decisions and changes behind each ticket.
        </Typography>
        <Box
          component="ul"
          sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.7, m: 0, pl: 4 }}
        >
          <li>Attach Jira issue keys to PRDs, architecture notes, branches, and pull requests.</li>
          <li>Track approval, review, and merge status in dashboards.</li>
          <li>Use linked artifacts as audit evidence for scope, decisions, and implementation.</li>
          <li>Map requirements to architecture and implementation changes for end-to-end traceability.</li>
        </Box>
      </Stack>
    </Paper>
  )
}
