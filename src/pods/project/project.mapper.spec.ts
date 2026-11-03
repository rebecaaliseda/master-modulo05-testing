import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import { mapProjectFromApiToVm } from './project.mapper';

describe('./pods/project/project.mapper', () => {
  it('should return empty project when project is undefined', () => {
    // Arrange
    const project = undefined;

    // Act
    const result = mapProjectFromApiToVm(project as any);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('should return empty project when project is null', () => {
    // Arrange
    const project = null;

    // Act
    const result = mapProjectFromApiToVm(project as any);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('should map project correctly', () => {
    // Arrange
    const project: apiModel.Project = {
      id: '1',
      name: 'Project Test',
      externalId: 'EXT-1',
      comments: 'Test comment',
      isActive: true,
      employees: [
        {
          id: 'emp-1',
          isAssigned: true,
          employeeName: 'Rebeca',
        },
      ],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual({
      id: '1',
      name: 'Project Test',
      externalId: 'EXT-1',
      comments: 'Test comment',
      isActive: true,
      employees: [
        {
          id: 'emp-1',
          isAssigned: true,
          employeeName: 'Rebeca',
        },
      ],
    });
  });
});
