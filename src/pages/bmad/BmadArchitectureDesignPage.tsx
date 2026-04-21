import * as React from 'react'
import { Box, Link, List, ListItemButton, ListItemText, Paper, Stack, Typography } from '@mui/material'
import step01Image from './architecture/step01.png'
import step02Default from './architecture/step02-default.png'
import step02FineTuned from './architecture/step02-fine-tuned.png'
import step04Image from './architecture/step04.png'
import step05Image from './architecture/step05.png'

type ArchitectureImage = {
  src: string
  title: string
  description: React.ReactNode
}

const architectureImages: ArchitectureImage[] = [
  {
    src: step01Image,
    title: '01. Start the architecture workflow',
    description: (
      <>
        Use the BMAD architecture workflow after the PRD has enough detail to guide system structure,
        technical constraints, and implementation boundaries. See the{' '}
        <Link href="https://docs.bmad-method.org/" target="_blank" rel="noopener noreferrer">
          BMAD Method documentation
        </Link>{' '}
        for workflow guidance.
      </>
    ),
  },
  {
    src: step02Default,
    title: '02. Default behavior',
    description: 'Notice how this is suggesting the Javascript/Typescript for the front-end, as well as a choice of cloud providers.'
  },
  {
    src: step02FineTuned,
    title: '03. Fine-tuned behavior',
    description: (
        <>
          The fine-tuned Architect role supported only Typescript and AWS.  Note the change from the previous step ("02. Default Behavior") when
            this version was run.  You can view{' '}
            <Link href="https://github.com/dennis-lin-dhcs/bmad-demo/compare/step01-create-prd...step02-create-architecture-fine-tuned?expand=1" target="_blank" rel="noopener noreferrer">
              the changes here.
            </Link>
        </>
    )
  },
  {
    src: step04Image,
    title: '04. List of tasks (stories in JIRA)',
    description: (
      <>
        As part of the process to generate architecture diagrams, the LLM powering BMAD also generates a list of stories as well.  The stories that
        were generated as part of this demo can be viewed{' '}
        <Link href="https://github.com/dennis-lin-dhcs/bmad-demo/compare/step01-create-prd...step02-create-architecture-fine-tuned?expand=1#diff-5e85fc7d73ddac178024558f4f4a6b608ed707a5ae1e5e51d11b8bd26c6c54e4R33" target="_blank" rel="noopener noreferrer">
          here.
        </Link>.  This fulfills Epics 1, 2 and 3{' '}
        <Link href="https://dhcs-mesmd.atlassian.net/wiki/spaces/MA/pages/4502683917/BMAD+Proposed+Epics+and+User+Stories+-+Version+2" target="_blank" rel="noopener noreferrer">
          of this document.
        </Link>
      </>
    )
  },
  {
    src: step05Image,
    title: '05. Development Guardrail',
    description: 'Once the architecture documents and technical documents are in, developer guardrails will fall in place.  As shown here, the guardrails confirm that the developer needs to follow project specs and the decisions made in the architecture documents.',
  },
]

const magnifierSize = 200
const magnifierZoom = 2.5

type MagnifierState = {
  visible: boolean
  x: number
  y: number
  imageX: number
  imageY: number
  imageWidth: number
  imageHeight: number
}

export default function BmadArchitectureDesignPage() {
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0)
  const [magnifier, setMagnifier] = React.useState<MagnifierState>({
    visible: false,
    x: 0,
    y: 0,
    imageX: 0,
    imageY: 0,
    imageWidth: 0,
    imageHeight: 0,
  })
  const imageRef = React.useRef<HTMLImageElement | null>(null)
  const selectedImage = architectureImages[selectedImageIndex]
  const magnifierBackgroundX = magnifierSize / 2 - magnifier.imageX * magnifierZoom
  const magnifierBackgroundY = magnifierSize / 2 - magnifier.imageY * magnifierZoom

  React.useEffect(() => {
    setMagnifier((current) => ({ ...current, visible: false }))
  }, [selectedImageIndex])

  const handleMagnifierMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const image = imageRef.current

    if (!image || !image.naturalWidth || !image.naturalHeight) {
      return
    }

    const rect = event.currentTarget.getBoundingClientRect()
    const containerRatio = rect.width / rect.height
    const imageRatio = image.naturalWidth / image.naturalHeight
    const imageWidth = containerRatio > imageRatio ? rect.height * imageRatio : rect.width
    const imageHeight = containerRatio > imageRatio ? rect.height : rect.width / imageRatio
    const imageLeft = (rect.width - imageWidth) / 2
    const imageTop = (rect.height - imageHeight) / 2
    const pointerX = event.clientX - rect.left
    const pointerY = event.clientY - rect.top
    const imageX = Math.min(Math.max(pointerX - imageLeft, 0), imageWidth)
    const imageY = Math.min(Math.max(pointerY - imageTop, 0), imageHeight)

    setMagnifier({
      visible: true,
      x: pointerX,
      y: pointerY,
      imageX,
      imageY,
      imageWidth,
      imageHeight,
    })
  }

  return (
    <Paper sx={{ p: 3 }}>
      <Stack spacing={1}>
        <Typography variant="h4">BMAD - Architecture Design</Typography>
        <Stack spacing={1.5} sx={{ pt: 2 }}>
          <Typography variant="h5">Architecture Design gallery</Typography>
          <Box
            sx={{
              display: 'grid',
              gap: 2,
              gridTemplateColumns: { xs: '1fr', md: '240px minmax(0, 1fr)' },
            }}
          >
            <List
              aria-label="Architecture Design gallery images"
              sx={{
                border: 1,
                borderColor: 'divider',
                borderRadius: 1,
                maxHeight: { xs: 180, md: 420 },
                overflowY: 'auto',
                p: 0.5,
              }}
            >
              {architectureImages.map((image, index) => (
                <ListItemButton
                  key={image.title}
                  onClick={() => setSelectedImageIndex(index)}
                  selected={selectedImageIndex === index}
                  sx={{ borderRadius: 1, mb: 0.5 }}
                >
                  <ListItemText
                    primary={image.title}
                    primaryTypographyProps={{ fontSize: '0.9rem' }}
                  />
                </ListItemButton>
              ))}
            </List>
            <Stack spacing={1.5}>
              <Box
                onMouseLeave={() => setMagnifier((current) => ({ ...current, visible: false }))}
                onMouseMove={handleMagnifierMove}
                sx={{
                  aspectRatio: '16 / 9',
                  bgcolor: 'grey.100',
                  borderRadius: 1,
                  cursor: 'zoom-in',
                  overflow: 'hidden',
                  position: 'relative',
                  width: '100%',
                }}
              >
                <Box
                  ref={imageRef}
                  component="img"
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  loading="lazy"
                  sx={{
                    display: 'block',
                    height: '100%',
                    objectFit: 'contain',
                    width: '100%',
                  }}
                />
                {magnifier.visible ? (
                  <Box
                    sx={{
                      backgroundImage: `url(${selectedImage.src})`,
                      backgroundPosition: `${magnifierBackgroundX}px ${magnifierBackgroundY}px`,
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: `${magnifier.imageWidth * magnifierZoom}px ${
                        magnifier.imageHeight * magnifierZoom
                      }px`,
                      border: 2,
                      borderColor: 'common.white',
                      borderRadius: 1,
                      boxShadow: 3,
                      height: magnifierSize,
                      left: magnifier.x,
                      pointerEvents: 'none',
                      position: 'absolute',
                      top: magnifier.y,
                      transform: 'translate(-50%, -50%)',
                      width: magnifierSize,
                    }}
                  />
                ) : null}
              </Box>
              <Stack spacing={0.5}>
                <Typography variant="h6">{selectedImage.title}</Typography>
                <Typography color="text.secondary">{selectedImage.description}</Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Paper>
  )
}
