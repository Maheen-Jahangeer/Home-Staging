export type Maybe<T> = T | undefined | null;

let idCounter = 0;

export const joinClass = (...classNames: Maybe<boolean | string>[]): string => {
  return classNames.filter((className: string) => !!className).join(" ");
};
