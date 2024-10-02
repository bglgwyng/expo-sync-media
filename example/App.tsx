import { StyleSheet, Text, View } from 'react-native';

import * as ExpoSyncMedia from 'expo-sync-media';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoSyncMedia.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
