import { StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

const ErrorPage = () => {
  return (
    <View style={styles.container}>
      <Icon name='alert-circle' size={50} color='coral' />

      <Text style={styles.title}>Oppsy Daisy!</Text>
      <Text style={styles.description}>
        Oneday I will be a nice error page, but for now I am just a sad placeholder. and hopefully I
        will never be seen by anyone.
      </Text>
    </View>
  );
};

export default ErrorPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: { fontSize: 20, fontWeight: 'bold' },
  description: { fontSize: 16, color: '#666', textAlign: 'center' },
});
