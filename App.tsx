import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NumberWidget, Widget, WidgetType} from './src/componenets/Widget';

const App = () => {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View style={styles.metaConntainer}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://avatars.githubusercontent.com/u/1024025?v=4',
            }}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.date}> 1 hour ago</Text>
          </View>
        </View>

        <Text style={styles.textPost}>Some text</Text>
        <Image
          style={styles.imagePost}
          source={{uri: 'https://picsum.photos/300/300'}}
        />

        <View style={styles.controlContiner}>
          <NumberWidget
            style={styles.noramlWidget}
            type={WidgetType.Like}
            count={10}
          />
          <NumberWidget
            style={styles.noramlWidget}
            type={WidgetType.Comment}
            count={10}
          />
          <NumberWidget
            style={styles.wideWidget}
            type={WidgetType.Share}
            count={10}
          />
          <Widget type={WidgetType.More} />
        </View>
      </View>
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
