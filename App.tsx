import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView>
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
          <NumberWidget></NumberWidget>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    borderWidth: 1,
    padding: 10,
    gap: 20,
  },
  metaConntainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    // borderWidth: 0.5,
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
    // height: 300,
    gap: 20,
  },
  textPost: {
    fontSize: 18,
  },
  imagePost: {
    width: '100%',
    aspectRatio: 4 / 3,
  },
  controlContiner: {
    flexDirection: 'row',
  },
});
