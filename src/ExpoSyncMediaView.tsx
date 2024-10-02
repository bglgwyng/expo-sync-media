import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoSyncMediaViewProps } from './ExpoSyncMedia.types';

const NativeView: React.ComponentType<ExpoSyncMediaViewProps> =
  requireNativeViewManager('ExpoSyncMedia');

export default function ExpoSyncMediaView(props: ExpoSyncMediaViewProps) {
  return <NativeView {...props} />;
}
