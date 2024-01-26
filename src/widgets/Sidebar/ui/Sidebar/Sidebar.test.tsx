import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar';
import { mainDecorator } from 'shared/config/testsDecorators/mainDecorator';

describe('Sidebar', () => {
  test('test render', () => {
    mainDecorator(<Sidebar/>)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('test toggle', () => {
    mainDecorator(<Sidebar/>)
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).not.toHaveClass('opened');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('opened');
  });
})
