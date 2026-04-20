import { Box, Paper, Stack, Typography } from '@mui/material'

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
      </Stack>
    </Paper>
  )
}
