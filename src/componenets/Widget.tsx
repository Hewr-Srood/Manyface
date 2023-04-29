import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
export enum WidgetType {
  Like = 'Like',
  Comment = 'Comment',
  Share = 'Share',
}
interface WidgetProps {
  type: WidgetType;
  count: number;
}
switch (type) {
    case WidgetType.Like:
        return (
            
const Widget: FC<WidgetProps> = ({type, count}) => {
  return (
    <View>
      <Text>Widget</Text>
    </View>
  );
};

export default Widget;

const styles = StyleSheet.create({});
