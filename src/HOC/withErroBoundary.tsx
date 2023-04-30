import { View } from 'react-native';
import React from 'react';

const withErroBoundary = (
  WrappedComponent: React.ComponentType<any>,
  ErrorPage?: React.ComponentType<any>,
  ErrorHandler?: (error: Error, errorInfo: React.ErrorInfo) => void,
) => {
  return class extends React.Component {
    state = {
      error: false,
      info: null,
    };
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
      console.log('error', error);
      this.setState({ error, info: errorInfo });
      if (ErrorHandler) {
        ErrorHandler(error, errorInfo);
      }
    }
    render(): React.ReactNode {
      if (this.state.error) {
        if (!ErrorPage) {
          return <View />;
        }
        return <ErrorPage error={this.state.error} info={this.state.info} />;
      }
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withErroBoundary;
