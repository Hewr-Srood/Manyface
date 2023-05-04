import { ActivityIndicator, Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState, useCallback } from 'react';
import FeedFactory from './FeedFactory';
import { FeedModel, IFeedResp } from '../Models/FeedModel';
import withErroBoundary from '../HOC/withErroBoundary';
import ErrorPage from './ErrorPage';
import { RotatingCircle } from './LoadingInndicator';

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
const Moment = () => {
  const keyExtractor = useCallback((item: FeedModel) => item.id.toString(), []);
  const [feed, setFeed] = useState<FeedModel[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchFeed = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch('https://my.api.mockaroo.com/manyface.json?key=0ecdabb0');
      const mockData: IFeedResp[] = await response.json();
      const data = mockData.map(item => new FeedModel(item));
      setFeed(data);
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
      {loading ? (
        <ListEmptyComponent />
      ) : (
        <FlatList
          style={{ flex: 1, paddingTop: 50 }}
          contentContainerStyle={{ paddingBottom: 50, gap: 20 }}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          data={feed}
          renderItem={renderItem}
          ListEmptyComponent={ListEmptyComponent}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          windowSize={10}
          removeClippedSubviews={true}
        />
      )}
    </View>
  );
};

export default withErroBoundary(Moment, ErrorPage, undefined);
