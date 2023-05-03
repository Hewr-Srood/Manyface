import { StyleSheet } from 'react-native';
import { withMetaAndControls } from '../HOC/withMetaAndControls';
import { FeedModel } from '../Models/FeedModel';
import withErroBoundary from '../HOC/withErroBoundary';
import ExapndaleText from './ExapndaleText';
import LoomingImage from './LoomingImage';

const Feed = (props: FeedModel) => {
  return (
    <>
      <ExapndaleText textStyle={styles.textPost} text={props.feed.text} />
      <LoomingImage style={styles.imagePost} source={{ uri: props.feed.images[0] }} />
    </>
  );
};

export default withErroBoundary(withMetaAndControls(Feed));

const styles = StyleSheet.create({
  textPost: {
    fontSize: 18,
  },
  imagePost: {
    width: '100%',
    aspectRatio: 4 / 3,
    borderRadius: 5,
    overflow: 'hidden',
  },
});
