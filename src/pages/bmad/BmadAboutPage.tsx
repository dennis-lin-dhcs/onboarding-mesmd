import { Link, Paper, Stack, Typography } from '@mui/material'

export default function BmadAboutPage() {
  return (
    <Paper sx={{ p: 3 }}>
      <Stack spacing={1}>
        <Typography variant="h4">BMAD - About</Typography>
        <Typography color="text.secondary">
          BMAD, short for Build More Architect Dreams, is an AI-driven development
          method for taking software work from early ideas through planning and into
          agentic implementation. It uses specialized AI agents, guided workflows,
          and project-aware context to help teams shape requirements, reason through
          architecture, and move into delivery with clearer handoffs.
        </Typography>
        <Typography color="text.secondary">
          It is designed to work alongside AI coding assistants and can scale from
          small fixes to larger product efforts where structured analysis, planning,
          and implementation support matter.
        </Typography>
        <Link href="https://docs.bmad-method.org/" target="_blank" rel="noopener noreferrer">
          BMAD Method documentation
        </Link>
      </Stack>
    </Paper>
  )
}
