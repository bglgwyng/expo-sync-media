import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoSyncMedia.web.ts
// and on native platforms to ExpoSyncMedia.ts
import ExpoSyncMediaModule from './ExpoSyncMediaModule';
import ExpoSyncMediaView from './ExpoSyncMediaView';
import { ChangeEventPayload, ExpoSyncMediaViewProps } from './ExpoSyncMedia.types';

// Get the native constant value.
export const PI = ExpoSyncMediaModule.PI;

export function hello(): string {
  return ExpoSyncMediaModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoSyncMediaModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoSyncMediaModule ?? NativeModulesProxy.ExpoSyncMedia);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoSyncMediaView, ExpoSyncMediaViewProps, ChangeEventPayload };
