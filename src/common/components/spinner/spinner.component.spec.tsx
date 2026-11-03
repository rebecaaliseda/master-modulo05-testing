import * as React from 'react';
import { render } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';
import { usePromiseTracker } from 'react-promise-tracker';

vi.mock('react-promise-tracker', () => ({
  usePromiseTracker: vi.fn(),
}));

describe('common/components/spinner/SpinnerComponent', () => {
  it('should render spinner when promise is in progress', () => {
    // Arrange
    vi.mocked(usePromiseTracker).mockReturnValue({
      promiseInProgress: true,
    });

    // Act
    const { container } = render(<SpinnerComponent />);

    // Assert
    expect(container).toBeTruthy();
  });

  it('should render spinner component when promise is not in progress', () => {
    // Arrange
    vi.mocked(usePromiseTracker).mockReturnValue({
      promiseInProgress: false,
    });

    // Act
    const { container } = render(<SpinnerComponent />);

    // Assert
    expect(container).toBeTruthy();
  });
});
