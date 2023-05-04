import { Animated, ImageProps, StyleSheet, View } from 'react-native';
import { FC, useRef, useState } from 'react';
import { RotatingCircle } from './LoadingInndicator';

interface ILoomingImageProps {
  style?: any;
  source: ImageProps['source'];
}
const LoomingImage: FC<ILoomingImageProps> = ({ style, source }) => {
  const [loaded, setLoaded] = useState(false);
  const opacity = useRef(new Animated.Value(0)).current;
  const onLoad = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setLoaded(true);
    });
  };
  return (
    <View style={[styles.contaier, style]}>
      {!loaded && (
        <View style={styles.overlay}>
          <RotatingCircle />
        </View>
      )}
      <Animated.Image onLoad={onLoad} source={source} style={[styles.image, { opacity }]} />
    </View>
  );
};

export default LoomingImage;

const styles = StyleSheet.create({
  contaier: {
    backgroundColor: 'lightgray',
    position: 'relative',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'lightgray',
    position: 'absolute',

    justifyContent: 'center',
    zIndex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
