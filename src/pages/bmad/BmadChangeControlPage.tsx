import { Box, Paper, Stack, Typography } from '@mui/material'

const workflowStages = [
  {
    title: 'Intake',
    description:
      'Create or update the Jira issue with the BMAD workflow, team, use case, risk category, expected outcome, and owning workstream.',
  },
  {
    title: 'Planning',
    description:
      'Link the PRD, architecture notes, personas, assumptions, and guardrail expectations before implementation begins.',
  },
  {
    title: 'Implementation',
    description:
      'Use a branch and pull request as the common state for code, generated artifacts, test evidence, decisions, and review comments.',
  },
  {
    title: 'Review',
    description:
      'Request domain, compliance, data security, security, privacy, or clinical review when the change touches their area of ownership.',
  },
  {
    title: 'Release',
    description:
      'Confirm required approvals, Jira links, dashboard impact, audit notes, and release gates before merge or rollout.',
  },
]

const releaseGates = [
  'PHI and PII detection behavior is covered by test cases, review notes, or documented exception handling.',
  'Jailbreak and prompt injection scenarios are blocked, flagged, or routed to review.',
  'Risky legal, medical, eligibility, security, or compliance interactions have a human escalation path.',
  'Cost thresholds, abnormal usage alerts, and owner notifications are defined.',
  'Dashboards use aggregate, redacted, or summarized data instead of raw sensitive content.',
  'Jira links, pull request approvals, executive summary notes, and audit evidence are complete.',
]

export default function BmadChangeControlPage() {
  return (
    <Paper sx={{ p: 3 }}>
      <Stack spacing={2}>
        <Typography variant="h4">BMAD - Change Control</Typography>
        <Typography color="text.secondary">
          Change control defines how BMAD work moves from Jira intake to approved delivery. GitHub
          pull requests act as the shared state for the team, while Jira tracks backlog priority,
          workstream status, and leadership-facing delivery commitments.
        </Typography>

        <Stack spacing={1}>
          <Typography variant="h5">Delivery lifecycle</Typography>
          <Box
            component="ul"
            sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.7, m: 0, pl: 4 }}
          >
            {workflowStages.map((stage) => (
              <li key={stage.title}>
                <Typography component="span" sx={{ color: 'text.primary', fontWeight: 600 }}>
                  {stage.title}:
                </Typography>{' '}
                {stage.description}
              </li>
            ))}
          </Box>
        </Stack>

        <Stack spacing={1}>
          <Typography variant="h5">Pull request common state</Typography>
          <Typography color="text.secondary">
            Each pull request should carry the working context needed by engineers, reviewers,
            compliance stakeholders, and leadership.
          </Typography>
          <Box
            component="ul"
            sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.7, m: 0, pl: 4 }}
          >
            <li>Link the Jira epic and story that authorized the work.</li>
            <li>Link PRD, architecture, persona, dashboard, and audit references when they apply.</li>
            <li>Use review requests to make domain and compliance ownership explicit.</li>
            <li>Preserve approval comments, open concerns, and decision history with the change.</li>
          </Box>
        </Stack>

        <Stack spacing={1}>
          <Typography variant="h5">Compliance release gates</Typography>
          <Typography color="text.secondary">
            Work that touches BMAD prompts, personas, dashboards, integrations, or automated
            workflows should pass these gates before merge or release.
          </Typography>
          <Box
            component="ul"
            sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.7, m: 0, pl: 4 }}
          >
            {releaseGates.map((gate) => (
              <li key={gate}>{gate}</li>
            ))}
          </Box>
        </Stack>

        <Stack spacing={1}>
          <Typography variant="h5">Sprint execution</Typography>
          <Typography color="text.secondary">
            The delivery epic should keep the next sprint focused on risk, cost, visibility, and a
            few concrete BMAD use cases that leadership can evaluate.
          </Typography>
          <Box
            component="ul"
            sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.7, m: 0, pl: 4 }}
          >
            <li>Maintain a prioritized backlog with risk and cost controls near the top.</li>
            <li>Provide short executive summaries for each workstream before sprint review.</li>
            <li>Show forward motion through visible dashboard, guardrail, and audit improvements.</li>
          </Box>
        </Stack>
      </Stack>
    </Paper>
  )
}
