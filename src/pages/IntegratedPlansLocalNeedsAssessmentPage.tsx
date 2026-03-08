import {Link, Paper, Stack, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Typography} from '@mui/material'

export default function IntegratedPlansLocalNeedsAssessmentPage() {
  return (
    <Paper sx={{ p: 3 }}>
      <Stack spacing={1}>
        <Typography variant="h4">Integrated Plans and Local Needs Assessment</Typography>
        <Typography variant="h5">Local Development Environment Setup</Typography>
        <Paper>
          <Typography variant="h6">Prerequisites</Typography>
          <Table sx={{"& td, & th": { border: 0 }}}>
            <TableBody sx={{ border: "none" }}>
              <TableRow>
                <TableCell>
                  <li>Requires .NET SDK 9.0.x</li>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <li>Runs in Postgres</li>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <li>Requires Redis (Docker optional)</li>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
        <Paper>
          <Typography variant="h6">Projects and Credentials</Typography>
          <Table sx={{"& td, & th": { border: 0 }}}>
            <TableBody sx={{ border: "none" }}>
              <TableRow>
                <TableCell>
                  <li>Checkout each individual project</li>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <li>Copy the secrets located at the Vault location into an "appsettings.Development.json" file</li>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <li>Build and launch the solution each with the specified launch profile</li>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography color="text.secondary">
            <TableContainer sx={{ width: "fit-content", margin: "auto" }}>
              <Table sx={{ width: "auto" }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell>GitHub Project</TableCell>
                    <TableCell>Vault Credentials (App-Dev)</TableCell>
                    <TableCell>Launch Profile</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>MESMD .NET Core C# API Reference Project</TableCell>
                    <TableCell>
                      <Link href="https://github.com/MESMD/bht-ip-int-api">BHT IP INT API</Link>
                    </TableCell>
                    <TableCell>
                      <Link href="https://vault-dev.mesmd.teleport.sh/ui/vault/secrets/secret/kv/xenon%2Fappsettings-development%2Fbht-ip-int-api/details?namespace=admin%2Ftenant%2Fbht&version=12">Vault Location</Link>
                    </TableCell>
                    <TableCell>http</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>BHT Integrated Plan (IP) Service API</TableCell>
                    <TableCell>
                      <Link href="https://github.com/MESMD/bht-ip-svc-api">BHT IP SVC API</Link>
                    </TableCell>
                    <TableCell>
                      <Link href="https://vault-dev.mesmd.teleport.sh/ui/vault/secrets/secret/kv/xenon%2Fappsettings-development%2Fbht-ip-svc-api/details?namespace=admin%2Ftenant%2Fbht&version=4">Vault Location</Link>
                    </TableCell>
                    <TableCell>http</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>BHT Integrated Plans UI</TableCell>
                    <TableCell>
                      <Link href="https://github.com/MESMD/bht-ip-ui">BHT IP UI</Link>
                    </TableCell>
                    <TableCell>
                      <Link href="https://vault-dev.mesmd.teleport.sh/ui/vault/secrets/secret/kv/xenon%2Fappsettings-development%2Fbht-ip-ui/details?namespace=admin%2Ftenant%2Fbht&version=9">Vault Location</Link>
                    </TableCell>
                    <TableCell>https</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>BHT Shared Workflow Service API</TableCell>
                    <TableCell>
                      <Link href="https://github.com/MESMD/bht-shared-workflow-svc-api">BHT Shared Workflow Service API</Link>
                    </TableCell>
                    <TableCell>
                      <Link href="https://vault-dev.mesmd.teleport.sh/ui/vault/secrets/secret/kv/xenon%2Fappsettings-development%2Fbht-shared-workflow-svc-api?namespace=admin%2Ftenant%2Fbht">Vault Location</Link>
                    </TableCell>
                    <TableCell>http</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>DHCS AI Integration API</TableCell>
                    <TableCell>
                      <Link href="https://github.com/MESMD/bht-dhcs-ai-integration">DHCS AI Integration API</Link>
                    </TableCell>
                    <TableCell>None</TableCell>
                    <TableCell>None</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          <Link href="https://dhcs-mesmd.atlassian.net/wiki/spaces/BHT/pages/2489679947/County+Portal+Integrated+Plan+IP+Azure+SSO+Integration#Test-Accounts">Test Accounts</Link>
          </Typography>
        </Paper>
        <Paper>
          <Typography variant="h6">Local Database Setup</Typography>
          In the
        </Paper>
      </Stack>
    </Paper>
  )
}
