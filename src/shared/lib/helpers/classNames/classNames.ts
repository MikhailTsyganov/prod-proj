export type TMods = Record<string, string | boolean | undefined>;

export function classNames(
  cls: string,
  mods: TMods = {},
  additional: Array<string | undefined> = [],
): string {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([key]) => key),
    ...additional.filter(Boolean),
  ].join(' ');
}
