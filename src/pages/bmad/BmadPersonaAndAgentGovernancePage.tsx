import { Box, Paper, Stack, Typography } from '@mui/material'

const personaGroups = [
  {
    title: 'Delivery Personas',
    personas: [
      {
        name: 'Product Owner',
        description: 'Owns product goals, prioritization, acceptance criteria, and release intent.',
      },
      {
        name: 'Architect',
        description:
          'Owns system structure, technical constraints, integration boundaries, and implementation guidance.',
      },
      {
        name: 'Developer',
        description:
          'Owns implementation details, code quality, tests, and alignment with established project patterns.',
      },
      {
        name: 'QA',
        description: 'Owns validation strategy, test coverage, regression risk, and acceptance evidence.',
      },
    ],
  },
  {
    title: 'Compliance Personas',
    personas: [
      {
        name: 'Data Security Reviewer',
        description:
          'Owns PHI, PII, credentials, secrets, regulated datasets, logs, exports, and sensitive prompt handling.',
      },
      {
        name: 'Security Reviewer',
        description:
          'Owns authentication, authorization, dependencies, CI/CD, deployment risks, trust boundaries, jailbreaks, and prompt injection.',
      },
      {
        name: 'Privacy Officer',
        description:
          'Owns collection, use, disclosure, retention, consent, minimum necessary access, and privacy audit trails.',
      },
      {
        name: 'Legal and Compliance Reviewer',
        description:
          'Owns regulatory obligations, contractual language, records retention, policy commitments, and legal risk.',
      },
      {
        name: 'Records and Audit Reviewer',
        description:
          'Owns Jira, GitHub, PRD, architecture, approval, and dashboard evidence needed for later review.',
      },
    ],
  },
  {
    title: 'Domain Review Personas',
    personas: [
      {
        name: 'Medical or Clinical Reviewer',
        description:
          'Owns clinical terminology, medical relevance, beneficiary impact, and boundaries around care-related decisions.',
      },
      {
        name: 'Program Policy Reviewer',
        description:
          'Owns DHCS or program policy alignment, business rules, workflows, and operational exceptions.',
      },
      {
        name: 'Accessibility Reviewer',
        description:
          'Owns WCAG expectations, keyboard support, screen reader behavior, accessible workflows, and plain language needs.',
      },
    ],
  },
]

const ownerExamples = [
  '/docs/personas/data-security.md @data-security-team',
  '/docs/personas/security.md @security-team',
  '/docs/personas/privacy-officer.md @privacy-team',
  '/docs/personas/legal-compliance.md @legal-compliance-team',
  '/docs/personas/clinical-reviewer.md @clinical-review-team',
  '/docs/personas/program-policy.md @program-policy-team',
  '/docs/personas/accessibility.md @accessibility-team',
  '/docs/bmad/guardrails/** @security-team @privacy-team',
  '/docs/bmad/dashboards/** @records-audit-team',
]

export default function BmadPersonaAndAgentGovernancePage() {
  return (
    <Paper sx={{ p: 3 }}>
      <Stack spacing={2}>
        <Typography variant="h4">BMAD - Persona and Agent Governance</Typography>
        <Typography color="text.secondary">
          Persona governance defines who owns BMAD behavior. Personas are not just documentation;
          they influence how AI-assisted workflows reason, escalate, and produce output. Changes to
          personas should be reviewable, versioned, and owned.
        </Typography>

        <Stack spacing={1}>
          <Typography variant="h5">Persona lifecycle</Typography>
          <Box
            component="ul"
            sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.7, m: 0, pl: 4 }}
          >
            <li>Store personas near the workflows or documentation that use them.</li>
            <li>Review persona and agent guidance changes through pull requests.</li>
            <li>Use CODEOWNERS to request review from accountable teams automatically.</li>
            <li>Review agent behavior changes with the same care as code or architecture changes.</li>
          </Box>
        </Stack>

        <Stack spacing={2}>
          <Typography variant="h5">Recommended personas</Typography>
          {personaGroups.map((group) => (
            <Box key={group.title}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                {group.title}
              </Typography>
              <Box
                component="ul"
                sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.7, m: 0, pl: 4 }}
              >
                {group.personas.map((persona) => (
                  <li key={persona.name}>
                    <Typography component="span" sx={{ color: 'text.primary', fontWeight: 600 }}>
                      {persona.name}:
                    </Typography>{' '}
                    {persona.description}
                  </li>
                ))}
              </Box>
            </Box>
          ))}
        </Stack>

        <Stack spacing={1}>
          <Typography variant="h5">Escalation ownership</Typography>
          <Box
            component="ul"
            sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.7, m: 0, pl: 4 }}
          >
            <li>PHI, PII, and sensitive data exposure route to Data Security and Privacy.</li>
            <li>Jailbreak, prompt injection, secrets, and trust-boundary concerns route to Security.</li>
            <li>Legal, records, retention, or policy commitments route to Legal and Compliance.</li>
            <li>Clinical, beneficiary-impacting, or program-rule questions route to domain reviewers.</li>
          </Box>
        </Stack>

        <Stack spacing={1}>
          <Typography variant="h5">CODEOWNERS examples</Typography>
          <Typography color="text.secondary">
            Persona and guardrail files can be protected by path so the right teams are requested
            for review when BMAD behavior changes.
          </Typography>
          <Box
            component="pre"
            sx={{
              bgcolor: 'grey.100',
              borderRadius: 1,
              color: 'text.primary',
              fontSize: '0.85rem',
              lineHeight: 1.6,
              m: 0,
              overflowX: 'auto',
              p: 2,
            }}
          >
            {ownerExamples.join('\n')}
          </Box>
        </Stack>
      </Stack>
    </Paper>
  )
}
