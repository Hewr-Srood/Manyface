import Feed3x3 from './Feed3x3';
import Feed2x2 from './Feed2x2';
import Feed from './Feed';
import { FeedModel } from '../Models/FeedModel';

const FeedFactory = (props: FeedModel) => {
  const numberOfImages = props.feed.images.length;
  if (numberOfImages > 4 && numberOfImages < 10) {
    return <Feed3x3 {...props} />;
  }
  if (numberOfImages > 1 && numberOfImages < 5) {
    return <Feed2x2 {...props} />;
  }
  if (numberOfImages === 1) {
    return <Feed {...props} />;
  }
  return <Feed3x3 {...props} />;
};

export default FeedFactory;
