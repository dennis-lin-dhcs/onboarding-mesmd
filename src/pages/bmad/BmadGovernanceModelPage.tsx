import { Box, Paper, Stack, Typography } from '@mui/material'

const jiraEpics = [
  {
    title: 'Epic 1: Risk & Cost Controls',
    description:
      'Detect sensitive data, block or flag risky interactions, catch jailbreak and prompt injection attempts, publish usage guardrails, and alert on cost spikes or abnormal usage.',
  },
  {
    title: 'Epic 2: Leadership Dashboard',
    description:
      'Show users, prompts, adoption trends, usage by team and workflow, safe prompt and response patterns, cost over time, cost per request, and cost connected to outcomes.',
  },
  {
    title: 'Epic 3: Safety & Compliance',
    description:
      'Report guardrail triggers, blocked interactions, sensitive data exposure indicators, jailbreak and prompt injection attempts, and traceable records for later review.',
  },
  {
    title: 'Epic 4: Delivery',
    description:
      'Maintain a prioritized backlog, provide executive summaries for each workstream, highlight concrete BMAD use cases, and focus the next sprint on risk, cost, and visibility.',
  },
]

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
        <Stack spacing={1}>
          <Typography variant="h5">Jira epic coverage</Typography>
          <Typography color="text.secondary">
            These compliance pages should map back to the active Jira epics so leadership can see
            how BMAD governance, delivery, and operational visibility are being handled.
          </Typography>
          <Box
            component="ul"
            sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.7, m: 0, pl: 4 }}
          >
            {jiraEpics.map((epic) => (
              <li key={epic.title}>
                <Typography component="span" sx={{ color: 'text.primary', fontWeight: 600 }}>
                  {epic.title}:
                </Typography>{' '}
                {epic.description}
              </li>
            ))}
          </Box>
        </Stack>
      </Stack>
    </Paper>
  )
}
