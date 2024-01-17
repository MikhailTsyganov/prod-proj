type TMods = Record<string, string | boolean>;

export function classNames(cls: string, mods?: TMods, additional?: string[]): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([key]) => key)
  ].join(' ');
}
