import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NumberWidget, Widget, WidgetType } from './src/componenets/Widget';

import Moment from './src/componenets/Moement';

const App = () => {
  return (
    <SafeAreaView style={styles.page}>
      <Moment />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,

    backgroundColor: '#f0f0f0',
  },
  container: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#ffffff99',
    borderRadius: 5,
    padding: 10,
    gap: 20,
  },
  metaConntainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    height: 60,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  infoContainer: {
    justifyContent: 'space-between',
    height: '100%',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  date: {
    fontSize: 16,
  },
  feedBody: {
    width: '100%',
    gap: 20,
  },
  textPost: {
    fontSize: 18,
  },
  imagePost: {
    width: '100%',
    aspectRatio: 4 / 3,
    borderRadius: 5,
  },
  controlContiner: {
    flexDirection: 'row',
  },
  widgetContainer: {
    flexDirection: 'row',
    gap: 10,
    flex: 1,
  },
  noramlWidget: {
    flex: 1,
  },
  wideWidget: {
    flex: 2,
  },
});
