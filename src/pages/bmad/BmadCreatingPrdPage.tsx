import * as React from 'react'
import { Box, List, ListItemButton, ListItemText, Paper, Stack, Typography } from '@mui/material'
import step01Image from './prd/step01.png'
import step02Image from './prd/step02.png'
import step03Image from './prd/step03.png'
import step04Image from './prd/step04.png'
import step05Image from './prd/step05.png'
import step06Image from './prd/step06.png'

const prdImages = [
  {
    src: step01Image,
    title: '01. Create the Product Requirements Document',
    description:
        'The first step in a new project is to create a Product Requirements Document with the "bmad-create-prd" command.' +
        'Simply follow the prompts and answer the questions.'
  },
  {
    src: step02Image,
    title: '02. Describing the project',
    description: 'The coding assistant is asking for context about the target audience.',
  },
  {
    src: step03Image,
    title: '03. Describing general functionality',
    description: 'The coding assistant asked follow-up questions about different user personas and the deployment context',
  },
  {
    src: step04Image,
    title: '04. Describing business proposal',
    description: 'The coding assistant asked for business background',
  },
  {
    src: step05Image,
    title: '05. Created executive summary',
    description: 'The coding assistant created an executive summary',
  },
  {
    src: step06Image,
    title: '06. Created user journeys',
    description: 'The coding assistant created the user journeys for the app',
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

export default function BmadCreatingPrdPage() {
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
  const selectedImage = prdImages[selectedImageIndex]
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
        <Typography variant="h4">BMAD - Creating a Product Requirements Document</Typography>
        <Stack spacing={1.5} sx={{ pt: 2 }}>
          <Typography variant="h5">Creating a PRD gallery</Typography>
          <Box
            sx={{
              display: 'grid',
              gap: 2,
              gridTemplateColumns: { xs: '1fr', md: '240px minmax(0, 1fr)' },
            }}
          >
            <List
              aria-label="Creating a PRD gallery images"
              sx={{
                border: 1,
                borderColor: 'divider',
                borderRadius: 1,
                maxHeight: { xs: 180, md: 420 },
                overflowY: 'auto',
                p: 0.5,
              }}
            >
              {prdImages.map((image, index) => (
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
