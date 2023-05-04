import {
  ActivityIndicator,
  Animated,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useEffect, useState, useCallback, useRef } from 'react';
import FeedFactory from './FeedFactory';
import { FeedModel, IFeedResp } from '../Models/FeedModel';
import withErroBoundary from '../HOC/withErroBoundary';
import ErrorPage from './ErrorPage';
import { RotatingCircle, SpinningEnvelope } from './LoadingInndicator';
import data from '../data.json';
const LoomingSpinnigEnvelope = Animated.createAnimatedComponent(SpinningEnvelope);
const renderItem = ({ item }: { item: FeedModel }) => <FeedFactory {...item} />;
const ListEmptyComponent = () => (
  <View
    style={{
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height / 1.25,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <RotatingCircle size={40} />
  </View>
);
const loadingIndicatorOffset = 50;
const Moment = () => {
  const keyExtractor = useCallback((item: FeedModel) => item.id.toString(), []);
  const pullDownPos = useRef(new Animated.Value(0)).current;
  const autoScrolling = useRef(new Animated.Value(0)).current;
  const userPulling = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef<FlatList<FeedModel>>(null);

  const [feed, setFeed] = useState<FeedModel[]>([]);
  const [loading, setLoading] = useState(false);
  const beginDrag = () => {
    userPulling.setValue(1);
    autoScrolling.setValue(0);
  };
  const endDrag = e => {
    const y = e.nativeEvent.contentOffset.y;
    userPulling.setValue(0);
    if (y <= -loadingIndicatorOffset) {
      setLoading(true);
      setTimeout(() => {
        flatListRef?.current?.scrollToOffset({ offset: 0, animated: true });
        setLoading(false);
      }, 1000);
    }
  };
  const onReset = e => {
    const y = e.nativeEvent.contentOffset.y;
    if (y === 0) {
      userPulling.setValue(0);
      autoScrolling.setValue(0);
    }
    if (loading) {
      setLoading(false);
    }
  };
  const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y: pullDownPos } } }], {
    useNativeDriver: true,
  });
  const fetchFeed = useCallback(async () => {
    setLoading(true);
    try {
      // const response = await fetch('https://my.api.mockaroo.com/manyface.json?key=0ecdabb0');
      // const mockData: IFeedResp[] = await response.json();
      const res = data.map(item => new FeedModel(item));
      setFeed(res);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    console.log('FeedModal mounted');
    fetchFeed();
    return () => {
      console.log('FeedModal unmounted');
    };
  }, [fetchFeed]);

  return (
    <View style={{ flex: 1 }}>
      <Animated.FlatList
        contentInset={{ top: loading ? 5 : 0 }}
        ref={flatListRef}
        style={{ flex: 1, paddingTop: 50 }}
        contentContainerStyle={{ paddingBottom: 50, gap: 20 }}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        data={feed}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
        onScroll={onScroll}
        onScrollBeginDrag={beginDrag}
        onScrollEndDrag={endDrag}
        onMomentumScrollEnd={onReset}
      />
      <View style={styles.overlay}>
        <LoomingSpinnigEnvelope
          color={'#6291f0'}
          size={50}
          style={{
            opacity: Animated.add(
              Animated.multiply(
                userPulling,
                pullDownPos.interpolate({
                  inputRange: [-loadingIndicatorOffset, 1],
                  outputRange: [0.5, 0],
                }),
              ),
              Animated.multiply(
                autoScrolling,
                pullDownPos.interpolate({
                  inputRange: [-loadingIndicatorOffset, 0],
                  outputRange: [1, 0],
                }),
              ),
            ),
          }}
        />
      </View>
      {/* )} */}
    </View>
  );
};
const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    justifyContent: 'center',
    width: '100%',
    top: 10,
    height: loadingIndicatorOffset,
    // backgroundColor: 'lightgray',
    opacity: 0.5,
    zIndex: 1,
  },
});

export default withErroBoundary(Moment, ErrorPage, undefined);
