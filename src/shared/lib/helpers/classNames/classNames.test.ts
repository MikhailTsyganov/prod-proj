import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional param', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'someClass hovered scrollable class1 class2';
    expect(
      classNames('someClass', { hovered: true, scrollable: true }, [
        'class1',
        'class2',
      ]),
    ).toBe(expected);
  });

  test('with mods and one is false', () => {
    const expected = 'someClass scrollable class1 class2';
    expect(
      classNames('someClass', { hovered: false, scrollable: true }, [
        'class1',
        'class2',
      ]),
    ).toBe(expected);
  });

  test('with mods and one is undefined', () => {
    const expected = 'someClass class1 class2';
    expect(
      classNames('someClass', { hovered: false, scrollable: undefined }, [
        'class1',
        'class2',
      ]),
    ).toBe(expected);
  });
});
