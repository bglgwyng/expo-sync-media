import {
	NativeModulesProxy,
	EventEmitter,
	type Subscription,
} from "expo-modules-core";

// Import the native module. On web, it will be resolved to ExpoSyncMedia.web.ts
// and on native platforms to ExpoSyncMedia.ts
import ExpoSyncMediaModule from "./ExpoSyncMediaModule";
import type { PersistentChanges } from "./ExpoSyncMedia.types";

export function fetchPersistentChanges(
	since?: string,
): Promise<PersistentChanges> {
	return ExpoSyncMediaModule.fetchPersistentChanges(since);
}
