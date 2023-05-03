import { Image, StyleSheet, View } from 'react-native';
import { withMetaAndControls } from '../HOC/withMetaAndControls';
import { FeedModel } from '../Models/FeedModel';
import withErroBoundary from '../HOC/withErroBoundary';
import ExapndaleText from './ExapndaleText';

const Feed2x2 = (props: FeedModel) => {
  return (
    <>
      <ExapndaleText numberOfLines={2} textStyle={styles.textPost} text={props.feed.text} />
      <View style={styles.gridContainer}>
        {props.feed.images.slice(0, 4).map((image, index) => {
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

export default withErroBoundary(withMetaAndControls(Feed2x2));

const styles = StyleSheet.create({
  textPost: {
    fontSize: 18,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cell: {
    width: '50%',

    paddingRight: 12,
    marginBottom: 12,
    aspectRatio: 4 / 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  imagePost: {
    width: '100%',
    aspectRatio: 4 / 3,
    borderRadius: 5,
  },
});
