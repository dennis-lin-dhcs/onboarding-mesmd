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
        description: 'Owns system structure, technical constraints, integration boundaries, and implementation guidance.',
      },
      {
        name: 'Developer',
        description: 'Owns implementation details, code quality, tests, and alignment with established project patterns.',
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
        description: 'Reviews handling of PHI, PII, credentials, secrets, regulated datasets, logs, exports, and AI prompts.',
      },
      {
        name: 'Security Reviewer',
        description: 'Reviews authentication, authorization, dependencies, CI/CD, deployment risks, and trust boundaries.',
      },
      {
        name: 'Privacy Officer',
        description: 'Reviews collection, use, disclosure, retention, consent, minimum necessary access, and privacy audit trails.',
      },
      {
        name: 'Legal and Compliance Reviewer',
        description: 'Reviews regulatory obligations, contractual language, records retention, policy commitments, and legal risk.',
      },
      {
        name: 'Records and Audit Reviewer',
        description: 'Reviews Jira, GitHub, PRD, and architecture links so decisions and approvals remain auditable.',
      },
    ],
  },
  {
    title: 'Domain Review Personas',
    personas: [
      {
        name: 'Medical or Clinical Reviewer',
        description: 'Reviews clinical terminology, medical relevance, beneficiary impact, and boundaries around care-related decisions.',
      },
      {
        name: 'Program Policy Reviewer',
        description: 'Reviews requirements against DHCS or program policy, business rules, workflows, and operational exceptions.',
      },
      {
        name: 'Accessibility Reviewer',
        description: 'Reviews accessibility requirements, WCAG expectations, keyboard support, screen reader behavior, and plain language needs.',
      },
    ],
  },
]

export default function BmadPersonaAndAgentGovernancePage() {
  return (
    <Paper sx={{ p: 3 }}>
      <Stack spacing={2}>
        <Typography variant="h4">BMAD - Persona and Agent Governance</Typography>
        <Typography color="text.secondary">
          Personas should be maintained as versioned project assets so the team can see how agent
          responsibilities, expectations, and operating constraints change over time. Keeping them
          in source control makes updates reviewable, traceable, and reusable across BMAD
          workflows.
        </Typography>
        <Typography color="text.secondary">
          A <Typography component="span" sx={{ fontFamily: 'monospace' }}>CODEOWNERS</Typography>{' '}
          file can help control changes by automatically requesting review from the people or teams
          responsible for persona definitions. This gives the project a lightweight guardrail for
          updates that could affect AI behavior, compliance posture, or delivery practices.
        </Typography>
        <Box
          component="ul"
          sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.7, m: 0, pl: 4 }}
        >
          <li>Store personas near the workflows or documentation that use them.</li>
          <li>Require owners to review persona and agent guidance changes before merge.</li>
          <li>Use pull request history to understand why persona guidance changed.</li>
          <li>Review agent behavior changes with the same care as code or architecture changes.</li>
        </Box>
        <Stack spacing={2} sx={{ pt: 1 }}>
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
          <Typography variant="h5">CODEOWNERS examples</Typography>
          <Typography color="text.secondary">
            Persona files can be protected by path so the right teams are automatically requested
            for review when guidance changes.
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
            {[
              '/docs/personas/data-security.md @data-security-team',
              '/docs/personas/security.md @security-team',
              '/docs/personas/privacy-officer.md @privacy-team',
              '/docs/personas/legal-compliance.md @legal-compliance-team',
              '/docs/personas/clinical-reviewer.md @clinical-review-team',
              '/docs/personas/program-policy.md @program-policy-team',
              '/docs/personas/accessibility.md @accessibility-team',
            ].join('\n')}
          </Box>
        </Stack>
      </Stack>
    </Paper>
  )
}
