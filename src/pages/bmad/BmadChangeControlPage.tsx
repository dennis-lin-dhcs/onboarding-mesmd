import { Box, Paper, Stack, Typography } from '@mui/material'

export default function BmadChangeControlPage() {
  return (
    <Paper sx={{ p: 3 }}>
      <Stack spacing={2}>
        <Typography variant="h4">BMAD - Change Control</Typography>
        <Typography color="text.secondary">
          GitHub pull requests provide a shared coordination point for BMAD-driven work. Each
          change can carry generated requirements, architecture notes, implementation decisions,
          review comments, Jira references, and approval state in one place that every team member
          can inspect.
        </Typography>
        <Typography color="text.secondary">
          Treating the pull request as common state keeps humans and AI-assisted workflows aligned.
          The branch captures the current implementation, the pull request discussion captures
          decisions and questions, and review requests make ownership explicit before changes are
          merged.
        </Typography>
        <Box
          component="ul"
          sx={{ color: 'text.secondary', fontSize: '0.9rem', lineHeight: 1.7, m: 0, pl: 4 }}
        >
          <li>Request reviewers from the teams that own affected domains.</li>
          <li>Link PRD, architecture, Jira, and audit references in the pull request description.</li>
          <li>Use review status as the shared signal for readiness and unresolved concerns.</li>
          <li>Keep discussion and approvals with the change so the decision history is preserved.</li>
        </Box>
      </Stack>
    </Paper>
  )
}
