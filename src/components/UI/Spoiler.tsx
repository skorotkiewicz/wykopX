import { MouseEvent, PropsWithChildren, useState } from 'react';
import { styled } from '@mui/material';

interface HideableSpoilerProps {
  showMessage: boolean;
}

export const HideableSpoiler = styled('span', {
  shouldForwardProp: (prop) => prop !== 'showMessage',
})<HideableSpoilerProps>(({ showMessage }) => ({
  display: 'inline-block',
  ...(!showMessage && {
    filter: 'blur(3px)',
    cursor: 'pointer',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
    a: {
      pointerEvents: 'none',
    },
  }),
}));

const Spoiler = ({ children }: PropsWithChildren<unknown>) => {
  const [showMessage, setShowMessage] = useState(false);

  const showSpoiler = (event: MouseEvent) => {
    if (!showMessage) {
      event.stopPropagation();
      setShowMessage(true);
    }
  };

  return (
    <HideableSpoiler onClick={showSpoiler} showMessage={showMessage}>
      {children}
    </HideableSpoiler>
  );
};

export default Spoiler;
