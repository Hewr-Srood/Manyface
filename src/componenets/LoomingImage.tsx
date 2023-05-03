import { Animated, ImageProps, StyleSheet, View } from 'react-native';
import React, { FC, useRef } from 'react';

interface ILoomingImageProps {
  style?: any;
  source: ImageProps['source'];
}
const LoomingImage: FC<ILoomingImageProps> = ({ style, source }) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const onLoad = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={[styles.contaier, style]}>
      <Animated.Image onLoad={onLoad} source={source} style={[styles.image, { opacity }]} />
    </View>
  );
};

export default LoomingImage;

const styles = StyleSheet.create({
  contaier: {
    backgroundColor: 'lightgray',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
