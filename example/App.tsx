import { StyleSheet, Text, View } from "react-native";

import * as ExpoSyncMedia from "expo-sync-media";
import { Button } from "react-native";
import * as MediaLibrary from "expo-media-library";
import { useEffect, useState } from "react";
import { EventEmitter } from "expo-modules-core";
export default function App() {
	const [token, setToken] = useState<string | null>(null);
	useEffect(() => {
		MediaLibrary.requestPermissionsAsync();
	});

	return (
		<View style={styles.container}>
			{/* <Text>{ExpoSyncMedia.hello()}</Text> */}
			<Button
				onPress={async () => {
					try {
						console.info({ token });
						const foo = await ExpoSyncMedia.fetchPersistentChanges(
							token ?? undefined,
						);
						// console.info(foo);
						setToken(foo.nextToken);
						// console.info(token, foo.nextToken);
						const { nextToken, ...bar } = foo;
						console.info(bar);
					} catch (e) {
						console.error(e);
					}
				}}
				title="Hello"
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

// new EventEmitter()
