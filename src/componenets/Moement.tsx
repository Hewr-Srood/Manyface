import { ActivityIndicator, Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import FeedFactory from './FeedFactory';
import { FeedModel, IFeedResp } from '../Models/FeedModel';
import withErroBoundary from '../HOC/withErroBoundary';
import ErrorPage from './ErrorPage';

const renderItem = ({ item }: { item: FeedModel }) => <FeedFactory {...item} />;

const ListEmptyComponent = () => (
  <View
    style={{
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height / 1.25,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <ActivityIndicator size='large' color='coral' />
  </View>
);
const Moment = () => {
  const [feed, setFeed] = useState<FeedModel[]>([]);
  const fetchFeed = async () => {
    const response = await fetch('https://my.api.mockaroo.com/manyface.json?key=0ecdabb0');
    const mockData: IFeedResp[] = await response.json();
    const data = mockData.map(item => new FeedModel(item));
    setFeed(mockData);
  };
  useEffect(() => {
    console.log('FeedModal mounted');
    fetchFeed();
    return () => {
      console.log('FeedModal unmounted');
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ flex: 1, paddingTop: 50 }}
        contentContainerStyle={{ paddingBottom: 50, gap: 20 }}
        keyExtractor={item => item.id.toString()}
        data={feed}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
      />
    </View>
  );
};

export default withErroBoundary(Moment, ErrorPage, undefined);
