import { Animated, Dimensions, Easing, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';

const Sekeleton = () => {
  const lightPos = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.timing(lightPos, {
        toValue: -Dimensions.get('window').width,
        delay: 500,
        easing: Easing.linear,
        duration: 1000,
        useNativeDriver: true,
      }),
    ).start();
  }, []);
  return (
    <View>
      {/* for future create the fakeFedd else this is uncompleted feature */}
      {/* <FakedFeed /> */}
      {/* <FakedFeed /> */}
      <Animated.View
        style={[
          styles.lightPos,
          {
            transform: [
              {
                translateX: lightPos,
              },
            ],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.lightPos,
          {
            right: -50,
            width: 30,
            transform: [
              {
                translateX: lightPos,
              },
            ],
          },
        ]}
      />
    </View>
  );
};

export default Sekeleton;

const styles = StyleSheet.create({
  lightPos: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#fff',
  },
});
