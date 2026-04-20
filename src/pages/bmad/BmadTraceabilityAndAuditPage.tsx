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
        <Stack spacing={1}>
          <Typography variant="h5">Leadership dashboard measures</Typography>
          <Typography color="text.secondary">
            Dashboard reporting should make adoption, cost, safety, and business value visible
            without exposing raw sensitive prompt or response content.
          </Typography>
          <Box
            component="ul"
            sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.7, m: 0, pl: 4 }}
          >
            <li>Track number of users, number of prompts, adoption trends, and usage by team.</li>
            <li>Break usage down by BMAD workflow, workstream, Jira epic, and concrete use case.</li>
            <li>Summarize prompt and response patterns at a safe aggregate level.</li>
            <li>Show cost over time, cost per request, cost by team, and cost by use case.</li>
            <li>Connect cost to outcomes so leadership can evaluate value instead of raw activity.</li>
          </Box>
        </Stack>
        <Stack spacing={1}>
          <Typography variant="h5">Safety and compliance signals</Typography>
          <Typography color="text.secondary">
            Risk and compliance reporting should surface problems early and preserve enough context
            for later review without turning dashboards into sensitive-data repositories.
          </Typography>
          <Box
            component="ul"
            sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.7, m: 0, pl: 4 }}
          >
            <li>Detect PII, HIPAA-related content, and sensitive data exposure indicators.</li>
            <li>Flag or block risky, non-compliant, jailbreak, and prompt injection interactions.</li>
            <li>Alert on cost spikes, abnormal usage, and unusual workflow patterns.</li>
            <li>Maintain traceable records for key interactions and incident review.</li>
          </Box>
        </Stack>
      </Stack>
    </Paper>
  )
}
