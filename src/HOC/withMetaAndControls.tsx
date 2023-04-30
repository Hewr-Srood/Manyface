import { Image, StyleSheet, Text, View } from 'react-native';
import { NumberWidget, Widget, WidgetType } from '../componenets/Widget';
import { FeedModel } from '../Models/FeedModel';

export const withMetaAndControls = (Feed: React.ComponentType<any>) => {
  return (props: FeedModel) => {
    return (
      <View style={styles.container}>
        {/* meta */}
        <View style={styles.metaConntainer}>
          <Image
            style={styles.avatar}
            source={{
              uri: props.meta.avatarUri,
            }}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{props.meta.name}</Text>
            <Text style={styles.date}> {props.meta.date}</Text>
          </View>
        </View>
        {/* feed */}
        <Feed {...props} />
        {/* controls */}
        <View style={styles.controlContiner}>
          <NumberWidget
            style={styles.noramlWidget}
            type={WidgetType.Like}
            count={props.meta.numberOfLikes}
          />
          <NumberWidget
            style={styles.noramlWidget}
            type={WidgetType.Comment}
            count={props.meta.numberOfComments}
          />
          <NumberWidget
            style={styles.wideWidget}
            type={WidgetType.Share}
            count={props.meta.numberOfShares}
          />
          <Widget type={WidgetType.More} />
        </View>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#ffffff99',
    borderRadius: 5,
    gap: 10,
    padding: 10,
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
  controlContiner: {
    flexDirection: 'row',
  },
  noramlWidget: {
    flex: 1,
  },
  wideWidget: {
    flex: 2,
  },
});
