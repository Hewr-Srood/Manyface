import { Image, StyleSheet, Text, View } from 'react-native';
import { withMetaAndControls } from '../HOC/withMetaAndControls';
import { FeedModel } from '../Models/FeedModel';
import withErroBoundary from '../HOC/withErroBoundary';

const Feed3x3 = (props: FeedModel) => {
  return (
    <>
      <Text style={styles.textPost}>{props.feed.text}</Text>
      <View style={styles.gridContainer}>
        {props.feed.images.slice(0, 9).map((image, index) => {
          return (
            <View style={styles.cell} key={image + index}>
              <Image
                key={index}
                style={styles.imagePost}
                source={{
                  uri: image,
                }}
              />
            </View>
          );
        })}
      </View>
    </>
  );
};

export default withErroBoundary(withMetaAndControls(Feed3x3));

const styles = StyleSheet.create({
  textPost: {
    fontSize: 18,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cell: {
    width: '33%',
    paddingRight: 3,
    marginBottom: 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  imagePost: {
    width: '100%',
    aspectRatio: 4 / 3,
    borderRadius: 5,
  },
});
