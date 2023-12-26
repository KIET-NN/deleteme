import { StyleSheet, Text, View } from 'react-native';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

export default function App() {
  return (
    <View style={styles.container}>
      <AppHeader />
      <AppFooter />
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
