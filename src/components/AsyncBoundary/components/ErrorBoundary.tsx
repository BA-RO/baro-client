import type { ReactNode } from 'react';
import { Component, type PropsWithChildren } from 'react';

import CommonErrorScreen from './ErrorScreen';

interface ErrorBoundaryProps {
  errorFallBack?: ReactNode;
  onError?: (error: Error) => void;
}

class ErrorBoundary extends Component<
  PropsWithChildren<ErrorBoundaryProps>,
  { error: Error | null }
> {
  error = null;

  componentDidCatch(error: Error) {
    if (this.props.onError) {
      this.setState({
        error,
      });
    }
  }

  render() {
    const { error } = this.state;

    if (error) {
      if (this.props.errorFallBack) {
        return this.props.errorFallBack;
      }

      return <CommonErrorScreen error={error} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
