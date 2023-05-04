import { Animated, Easing, StyleSheet, View, ViewStyle } from 'react-native';
import React, { Component, FC, useEffect, useRef } from 'react';
import Icon from 'react-native-vector-icons/Feather';
interface ILoadingInndicatorProps {
  style?: ViewStyle;
  size?: number;
  color?: string;
}
const AnimatedIcon = Animated.createAnimatedComponent(Icon);
export const RotatingCircle: FC<ILoadingInndicatorProps> = ({
  style,
  size = 20,
  color = 'gray',
}) => {
  const rotate = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.timing(rotate, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, []);
  return (
    <View style={[style, styles.stablizer]}>
      <AnimatedIcon
        name='loader'
        size={size}
        color={color}
        style={{
          transform: [
            {
              rotate: rotate.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '360deg'],
              }),
            },
          ],
        }}
      />
    </View>
  );
};
// export const SpinningEnvelope: FC<ILoadingInndicatorProps> = ({
//   style,
//   size = 20,
//   color = 'gray',
// }) => {
//   const rotate = useRef(new Animated.Value(0)).current;
//   useEffect(() => {
//     Animated.loop(
//       Animated.timing(rotate, {
//         toValue: 1,
//         duration: 1000,
//         easing: Easing.linear,
//         useNativeDriver: true,
//       }),
//     ).start();
//   }, []);
//   return (
//     <View style={[style, styles.stablizer]}>
//       <AnimatedIcon
//         name='mail'
//         size={size}
//         color={color}
//         style={{
//           transform: [
//             {
//               rotateY: rotate.interpolate({
//                 inputRange: [0, 1],
//                 outputRange: ['0deg', '360deg'],
//               }),
//             },
//           ],
//         }}
//       />
//     </View>
//   );
// };
export class SpinningEnvelope extends Component<ILoadingInndicatorProps> {
  constructor(props: ILoadingInndicatorProps) {
    super(props);
  }
  rotate = new Animated.Value(0);

  componentDidMount(): void {
    Animated.loop(
      Animated.timing(this.rotate, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }
  render() {
    return (
      <View style={[this.props.style, styles.stablizer]}>
        <AnimatedIcon
          name='loader'
          size={this.props.size}
          color={this.props.color}
          style={{
            transform: [
              {
                rotate: this.rotate.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  stablizer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
