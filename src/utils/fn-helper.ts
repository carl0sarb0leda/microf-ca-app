export const formatName = (firstName: string, name?: string) => {
  if (name) {
    return `${name} (${firstName})`;
  }
  return firstName;
};
