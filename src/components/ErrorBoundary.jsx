import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error('[ErrorBoundary] Caught Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // General fallback UI
      return (
        <div style={{ padding: '2rem', textAlign: 'center', color: '#fff', backgroundColor: '#1e1e24', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ color: '#ff4d4d' }}>Something went wrong.</h1>
          <p style={{ maxWidth: '600px', margin: '1rem auto', color: '#a0a0b0' }}>
            The application encountered a critical error. Please refresh the page or try again later.
          </p>
          <button 
            onClick={() => window.location.reload()}
            style={{ padding: '0.75rem 1.5rem', background: '#00E5FF', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
