import { SectionList, StyleSheet, Text, View } from 'react-native';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

export default function App() {
  return (
    <View style={styles.container}>
      <AppHeader />
      <Text style={{fontSize: 30}} >Here goes the list of vehicle models...</Text>
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
