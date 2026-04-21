import * as React from 'react'
import { Box, Paper, Stack, Typography } from '@mui/material'
import developmentFlowImage from './architecture/step03.png'

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

export default function BmadDevelopmentFlowPage() {
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
  const magnifierBackgroundX = magnifierSize / 2 - magnifier.imageX * magnifierZoom
  const magnifierBackgroundY = magnifierSize / 2 - magnifier.imageY * magnifierZoom

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
      <Stack spacing={2}>
        <Typography variant="h4">BMAD - Development Flow</Typography>
        <Typography color="text.secondary">
          This flow shows how BMAD moves from requirements and architecture into guarded
          implementation. Hover over the image to inspect the flow in more detail.
        </Typography>
        <Stack spacing={1.5}>
          <Typography variant="h5">Development flow diagram</Typography>
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
              src={developmentFlowImage}
              alt="BMAD development flow"
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
                  backgroundImage: `url(${developmentFlowImage})`,
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
          <Typography color="text.secondary">
            The flow ties together requirements, architecture, guardrails, implementation, and
            review so BMAD output remains aligned with project intent.
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  )
}
