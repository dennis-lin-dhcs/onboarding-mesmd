import * as React from 'react'
import { Box, Link, List, ListItemButton, ListItemText, Paper, Stack, Typography } from '@mui/material'

type ArchitectureImage = {
  src: string
  title: string
  description: React.ReactNode
}

const architectureImages: ArchitectureImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80',
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
    src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    title: '02. Define system boundaries',
    description: 'Capture the major services, user-facing surfaces, data flows, and integrations.',
  },
  {
    src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
    title: '03. Review implementation guidance',
    description: 'Use the architecture output to align coding agents on structure, patterns, and constraints.',
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
