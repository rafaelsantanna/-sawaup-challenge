import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import { TransitionProps } from '@mui/material/transitions';
import type { ModalVideoConfig } from '../../types/modal-video-config';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type Props = {
  config: ModalVideoConfig
  onClose: Function
}

const ModalVideo = ({ config: { title, url }, onClose }: Props): JSX.Element =>  {
  console.log('[CONFIG]', title, url)
  return (
    <Dialog
      open
      TransitionComponent={Transition}
      keepMounted
      onClose={() => onClose()}
      aria-describedby="alert-dialog-slide-description"
      fullScreen
    >
      <DialogTitle>
        <IconButton
          edge="start"
          color="inherit"
          onClick={() => onClose()}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
        {title}
      </DialogTitle>

      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          <Box display='flex' justifyContent='center'>
            <iframe
              width="853"
              height="480"
              src={url}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </Box>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

export default ModalVideo;
