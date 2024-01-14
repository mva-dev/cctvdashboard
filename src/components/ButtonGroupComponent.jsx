import React from 'react'
import {Stack,IconButton,ButtonGroup} from '@mui/material'
import Replay10Icon from '@mui/icons-material/Replay10';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import FastForwardIcon from '@mui/icons-material/FastForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Forward10Icon from '@mui/icons-material/Forward10';
export const ButtonGroupComponent = () => {
  return (
    <Stack direction='row' my={1} sx={{marginLeft:"15px"}}>
      <ButtonGroup variant='contained' aria-label='controls button group'>
        <IconButton aria-label='replay10' color="primary" size='large'>
            <Replay10Icon fontSize="large"/>
        </IconButton>
        <IconButton aria-label='FastRewind' color="primary" size='large'>
            <FastRewindIcon fontSize="large"/>
        </IconButton>
        <IconButton aria-label='PlayArrow' color="primary" size='large'>
            <PlayArrowIcon fontSize="large"/>
        </IconButton>
        <IconButton aria-label='FastForward' color="primary" size='large'>
            <FastForwardIcon fontSize="large"/>
        </IconButton>
        <IconButton aria-label='Forward10' color="primary" size='large'>
            <Forward10Icon fontSize="large"/>
        </IconButton>
      </ButtonGroup>
    </Stack>
  )
}
