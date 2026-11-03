import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('common/components/confirmation-dialog/ConfirmationDialogComponent', () => {
  it('should render title and content when dialog is open', () => {
    // Arrange

    // Act
    render(
      <ConfirmationDialogComponent
        isOpen={true}
        onAccept={vi.fn()}
        onClose={vi.fn()}
        title="Delete employee"
        labels={{
          closeButton: 'Cancel',
          acceptButton: 'Accept',
        }}
      >
        <p>Dialog content</p>
      </ConfirmationDialogComponent>
    );

    // Assert
    expect(screen.getByText('Delete employee')).toBeInTheDocument();
    expect(screen.getByText('Dialog content')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Accept')).toBeInTheDocument();
  });

  it('should call onClose when close button is clicked', async () => {
    // Arrange
    const onClose = vi.fn();

    render(
      <ConfirmationDialogComponent
        isOpen={true}
        onAccept={vi.fn()}
        onClose={onClose}
        title="Delete employee"
        labels={{
          closeButton: 'Cancel',
          acceptButton: 'Accept',
        }}
      >
        <p>Dialog content</p>
      </ConfirmationDialogComponent>
    );

    // Act
    await userEvent.click(screen.getByText('Cancel'));

    // Assert
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should call onAccept and onClose when accept button is clicked', async () => {
    // Arrange
    const onAccept = vi.fn();
    const onClose = vi.fn();

    render(
      <ConfirmationDialogComponent
        isOpen={true}
        onAccept={onAccept}
        onClose={onClose}
        title="Delete employee"
        labels={{
          closeButton: 'Cancel',
          acceptButton: 'Accept',
        }}
      >
        <p>Dialog content</p>
      </ConfirmationDialogComponent>
    );

    // Act
    await userEvent.click(screen.getByText('Accept'));

    // Assert
    expect(onAccept).toHaveBeenCalledTimes(1);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
