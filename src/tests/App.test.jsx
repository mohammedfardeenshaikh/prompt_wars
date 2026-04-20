import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import { AuthProvider } from '../context/AuthContext';

describe('App Layout', () => {
  it('should render the app container and navigation elements', () => {
    // Requires wrapping in BrowserRouter since App uses routes
    // and AuthProvider since Navbar/Sidebar use Auth context
    render(
      <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    );
    
    // We expect the Sidebar and Navbar to render in the document
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });
});
