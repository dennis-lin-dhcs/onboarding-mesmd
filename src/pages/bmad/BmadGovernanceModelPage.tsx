import { Box, Paper, Stack, Typography } from '@mui/material'

const operatingModel = [
  {
    title: 'BMAD artifacts',
    description:
      'Hold the planning context: PRDs, architecture notes, personas, workflow guidance, guardrails, and implementation direction.',
  },
  {
    title: 'GitHub',
    description:
      'Provides the collaboration and approval layer through branches, pull requests, review requests, CODEOWNERS, and merge history.',
  },
  {
    title: 'Jira',
    description:
      'Remains the operational source of record for epics, stories, backlog priority, workstream summaries, delivery status, and leadership reporting.',
  },
  {
    title: 'Dashboards',
    description:
      'Show adoption, cost, safety, compliance, and value signals at a safe summary level without exposing raw sensitive prompt content.',
  },
]

const epicCoverage = [
  {
    epic: 'Epic 1: Risk & Cost Controls',
    home: 'Change Control and Traceability',
    description:
      'Defines the guardrails for PHI, PII, risky interactions, jailbreak attempts, prompt injection, abnormal usage, and cost spikes.',
  },
  {
    epic: 'Epic 2: Leadership Dashboard',
    home: 'Traceability and Audit',
    description:
      'Defines adoption, usage, cost, workflow, team, safe pattern, and business value reporting.',
  },
  {
    epic: 'Epic 3: Safety & Compliance',
    home: 'Persona Governance and Traceability',
    description:
      'Defines ownership, review, guardrail trigger reporting, sensitive exposure indicators, and traceable incident records.',
  },
  {
    epic: 'Epic 4: Delivery',
    home: 'Change Control',
    description:
      'Defines prioritized backlog execution, executive summaries, concrete BMAD use cases, and sprint focus on risk, cost, and visibility.',
  },
]

export default function BmadGovernanceModelPage() {
  return (
    <Paper sx={{ p: 3 }}>
      <Stack spacing={2}>
        <Typography variant="h4">BMAD - Governance Model</Typography>
        <Typography color="text.secondary">
          The BMAD governance model defines how AI-assisted delivery stays coordinated, controlled,
          measurable, and auditable. It separates the operating model from the day-to-day change
          process, persona ownership, and evidence reporting.
        </Typography>
        <Typography color="text.secondary">
          The goal is not to slow every interaction down. The goal is to make the important moments
          visible: when sensitive data appears, when cost changes unexpectedly, when a workflow
          crosses a policy boundary, or when human approval is needed.
        </Typography>

        <Stack spacing={1}>
          <Typography variant="h5">Operating model</Typography>
          <Box
            component="ul"
            sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.7, m: 0, pl: 4 }}
          >
            {operatingModel.map((item) => (
              <li key={item.title}>
                <Typography component="span" sx={{ color: 'text.primary', fontWeight: 600 }}>
                  {item.title}:
                </Typography>{' '}
                {item.description}
              </li>
            ))}
          </Box>
        </Stack>

        <Stack spacing={1}>
          <Typography variant="h5">Jira epic alignment</Typography>
          <Typography color="text.secondary">
            Each compliance page owns a specific part of the active Jira epic set so the material
            maps cleanly back to delivery work and leadership reporting.
          </Typography>
          <Box
            component="ul"
            sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.7, m: 0, pl: 4 }}
          >
            {epicCoverage.map((item) => (
              <li key={item.epic}>
                <Typography component="span" sx={{ color: 'text.primary', fontWeight: 600 }}>
                  {item.epic}
                </Typography>{' '}
                ({item.home}): {item.description}
              </li>
            ))}
          </Box>
        </Stack>

        <Stack spacing={1}>
          <Typography variant="h5">Page responsibilities</Typography>
          <Box
            component="ul"
            sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.7, m: 0, pl: 4 }}
          >
            <li>Governance Model defines the overall operating model and epic alignment.</li>
            <li>Change Control defines how Jira issues, pull requests, guardrails, and release gates work.</li>
            <li>Persona and Agent Governance defines who owns review for sensitive BMAD behavior.</li>
            <li>Traceability and Audit defines dashboards, signals, evidence, and incident review records.</li>
          </Box>
        </Stack>
      </Stack>
    </Paper>
  )
}
