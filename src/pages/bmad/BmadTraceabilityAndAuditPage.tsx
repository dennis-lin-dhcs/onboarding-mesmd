import { Box, Paper, Stack, Typography } from '@mui/material'

const dashboardMeasures = [
  'Number of users, number of prompts, adoption trends, and usage by team.',
  'Usage by BMAD workflow, workstream, Jira epic, and concrete use case.',
  'Safe summaries of prompt and response patterns without exposing raw sensitive content.',
  'Cost over time, cost per request, cost by team, and cost by use case.',
  'Cost connected to outcomes so leadership can evaluate value instead of raw activity.',
]

const controlSignals = [
  {
    title: 'PHI and PII',
    items: [
      'Detect HIPAA-related content, personal identifiers, account numbers, free-text personal details, and sensitive screenshots.',
      'Redact or summarize sensitive values before they appear in dashboards or reports.',
      'Route repeated exposure patterns to data security and privacy reviewers.',
    ],
  },
  {
    title: 'Risky interactions',
    items: [
      'Flag requests that ask BMAD to make unsupported legal, medical, eligibility, security, or compliance determinations.',
      'Require human review when generated content affects beneficiary impact, production access, or regulated workflows.',
      'Document approved use, prohibited use, and review thresholds in team guardrails.',
    ],
  },
  {
    title: 'Jailbreak and prompt injection',
    items: [
      'Detect attempts to override system instructions, bypass policy, reveal secrets, or ignore guardrails.',
      'Flag prompt injection patterns in user input, retrieved documents, issue comments, and generated artifacts.',
      'Trend attempts by team, workflow, source, and time period so misuse patterns are visible.',
    ],
  },
  {
    title: 'Cost controls',
    items: [
      'Track abnormal usage, unusually large prompts, repeated retries, runaway automation loops, and cost spikes.',
      'Set expected budget thresholds for pilots, workstreams, and production use cases.',
      'Alert owners when spend exceeds thresholds or diverges from expected usage patterns.',
    ],
  },
]

export default function BmadTraceabilityAndAuditPage() {
  return (
    <Paper sx={{ p: 3 }}>
      <Stack spacing={2}>
        <Typography variant="h4">BMAD - Traceability and Audit</Typography>
        <Typography color="text.secondary">
          Traceability connects Jira, GitHub, BMAD artifacts, dashboards, and audit records. It
          should show what happened, why it happened, who approved it, what risks were detected,
          and which outcomes the work supported.
        </Typography>

        <Stack spacing={1}>
          <Typography variant="h5">Evidence chain</Typography>
          <Box
            component="ul"
            sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.7, m: 0, pl: 4 }}
          >
            <li>Attach Jira issue keys to PRDs, architecture notes, branches, and pull requests.</li>
            <li>Track approval, review, merge, release, and exception status.</li>
            <li>Use linked artifacts as evidence for scope, decisions, implementation, and review.</li>
            <li>Map requirements to architecture and implementation changes for end-to-end traceability.</li>
          </Box>
        </Stack>

        <Stack spacing={1}>
          <Typography variant="h5">Leadership dashboard measures</Typography>
          <Typography color="text.secondary">
            Dashboard reporting should make adoption, cost, safety, and business value visible at
            an aggregate level.
          </Typography>
          <Box
            component="ul"
            sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.7, m: 0, pl: 4 }}
          >
            {dashboardMeasures.map((measure) => (
              <li key={measure}>{measure}</li>
            ))}
          </Box>
        </Stack>

        <Stack spacing={2}>
          <Typography variant="h5">Control monitoring</Typography>
          {controlSignals.map((section) => (
            <Box key={section.title}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {section.title}
              </Typography>
              <Box
                component="ul"
                sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.7, m: 0, pl: 4 }}
              >
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </Box>
            </Box>
          ))}
        </Stack>

        <Stack spacing={1}>
          <Typography variant="h5">Audit record</Typography>
          <Typography color="text.secondary">
            Audit records should preserve enough information for investigation without becoming a
            repository of raw sensitive data.
          </Typography>
          <Box
            component="ul"
            sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.7, m: 0, pl: 4 }}
          >
            <li>Record guardrail trigger type, timestamp, workflow, team, Jira issue, and outcome.</li>
            <li>Store redacted summaries for flagged or blocked interactions.</li>
            <li>Link incidents back to owner review, mitigation, and follow-up Jira work.</li>
            <li>Report trends for leadership without exposing raw PHI, PII, secrets, or prompt contents.</li>
          </Box>
        </Stack>
      </Stack>
    </Paper>
  )
}
