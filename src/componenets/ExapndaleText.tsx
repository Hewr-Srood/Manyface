import { FC, useState } from 'react';
import {
  LayoutAnimation,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface IExapndaleTextProps {
  text: string;

  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
}
const ExapndaleText: FC<IExapndaleTextProps> = ({
  text,

  containerStyle,
  textStyle,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [numberOfLines, setNumberOfLines] = useState<undefined | number>(3);

  const handleExpand = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(300, LayoutAnimation.Types.linear, LayoutAnimation.Properties.opacity),
    );

    setNumberOfLines(undefined);
    setIsExpanded(prev => !prev);
  };
  const handleFold = () => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(300, LayoutAnimation.Types.linear, LayoutAnimation.Properties.opacity),
    );
    setNumberOfLines(3);
    setIsExpanded(prev => !prev);
  };
  return text?.length > 300 ? (
    <View style={containerStyle}>
      {numberOfLines ? (
        <Text key={'1'} style={[styles.text, textStyle]} numberOfLines={3} ellipsizeMode='clip'>
          {text}
        </Text>
      ) : (
        <Text key={'2'} style={[styles.text, textStyle]} ellipsizeMode='clip'>
          {text}
        </Text>
      )}
      {!isExpanded ? (
        <TouchableOpacity onPress={handleExpand}>
          <Icon name='more-horizontal' size={20} color='gray' />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleFold}>
          <Icon name='chevron-up' size={20} color='gray' />
        </TouchableOpacity>
      )}
    </View>
  ) : (
    <View style={containerStyle}>
      <Text style={[styles.text, textStyle]} numberOfLines={numberOfLines} ellipsizeMode='clip'>
        {text}
      </Text>
    </View>
  );
};

export default ExapndaleText;

const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontSize: 18,
  },
});
