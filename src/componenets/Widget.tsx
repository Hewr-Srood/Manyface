import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/Feather';
export enum WidgetType {
  Like = 'Like',
  Comment = 'Comment',
  Share = 'Share',
  More = 'More',
}
interface WidgetProps {
  type: WidgetType;
}
interface NumberWidgetProps extends WidgetProps {
  count: number;
  style: ViewStyle;
}
function getIconName(type: WidgetType) {
  switch (type) {
    case WidgetType.Like:
      return 'thumbs-up';
    case WidgetType.Comment:
      return 'message-circle';
    case WidgetType.Share:
      return 'share';
    case WidgetType.More:
      return 'more-horizontal';
    default:
      return '';
  }
}
export const Widget: FC<WidgetProps> = ({ type }) => {
  return <Icon name={getIconName(type)} size={20} color='gray' />;
};

export const NumberWidget: FC<NumberWidgetProps> = ({ type, count, style }) => {
  return (
    <View style={[styles.numberWidget, style]}>
      <Widget type={type} />
      <Text style={styles.numberWidgetText}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  numberWidget: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  numberWidgetText: {
    color: 'gray',
  },
});
