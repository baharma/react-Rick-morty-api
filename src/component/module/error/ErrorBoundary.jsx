class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  componentDidCatch(error, errorInfo) {
    // Handle the error, log it, and set the state accordingly
    this.setState({ hasError: true });
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
  }
  render() {
    if (this.state.hasError) {
      // Render an error message or a fallback UI
      return <div>Something went wrong. Please try again later.</div>;
    }
    return this.props.children;
  }
}
