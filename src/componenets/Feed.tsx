import { Image, StyleSheet, Text } from 'react-native';
import { withMetaAndControls } from '../HOC/withMetaAndControls';
import { FeedModel } from '../Models/FeedModel';

const Feed = (props: FeedModel) => {
  return (
    <>
      <Text style={styles.textPost}>{props.feed.text}</Text>
      <Image style={styles.imagePost} source={{ uri: props.feed.images[0] }} />
    </>
  );
};

export default withMetaAndControls(Feed);

const styles = StyleSheet.create({
  textPost: {
    fontSize: 18,
  },
  imagePost: {
    width: '100%',
    aspectRatio: 4 / 3,
    borderRadius: 5,
  },
});
