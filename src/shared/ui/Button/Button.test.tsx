import { Button, EButtonVariants } from './Button'
import { render, screen } from '@testing-library/react'

describe('Button', () => {
  test('test render', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('test transparent button', () => {
    render(<Button variant={EButtonVariants.TRANSPARENT}>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('transparent');
    screen.debug();
  });
})
