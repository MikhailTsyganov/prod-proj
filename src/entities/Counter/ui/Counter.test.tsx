import { fireEvent, screen } from '@testing-library/react'
import { MainDecorator } from 'shared/config/testsDecorators/mainDecorator';
import { Counter } from './Counter';

describe('Counter', () => {
  test('counter test render', () => {
    MainDecorator(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('increment', () => {
    MainDecorator(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    fireEvent.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('decrement', () => {
    MainDecorator(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    fireEvent.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
})
