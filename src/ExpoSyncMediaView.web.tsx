import * as React from 'react';

import { ExpoSyncMediaViewProps } from './ExpoSyncMedia.types';

export default function ExpoSyncMediaView(props: ExpoSyncMediaViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
