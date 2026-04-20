import { render, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import LiveExperience from '../pages/LiveExperience';
import { vi } from 'vitest';

describe('LiveExperience Data Updates', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('updates queue wait times over time', async () => {
    render(
      <AuthProvider>
        <MemoryRouter>
          <LiveExperience />
        </MemoryRouter>
      </AuthProvider>
    );

    // Initial check (Gate A North is one of the gate constants)
    const gateA = screen.getByText(/Gate A/i).parentElement;
    const initialTime = gateA.textContent;

    // Advance time by 3.5 seconds (the interval is 3000ms)
    act(() => {
      vi.advanceTimersByTime(3500);
    });

    // The time should likely have changed (randomly)
    // In a mature test, we'd mock Math.random to be deterministic
    expect(gateA.textContent).not.toBe(initialTime);
  });
});
