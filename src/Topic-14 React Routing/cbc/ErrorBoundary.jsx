import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }

 
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error: error,
    };
  }

  componentDidCatch(error,errorInfo)
  {
      console.error("Caught error:", error.message);
      console.error("Component stack:", errorInfo.componentStack);
  }
   
  render() {
    const { hasError, error } = this.state;

    if (hasError) {
      return (
        <div>
            <h1>Oops there is an Error</h1>
          <h2>{error.message}</h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;



