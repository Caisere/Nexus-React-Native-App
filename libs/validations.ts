export function verifyEmail(text: string) {
  return !/\S+@\S+\.\S+/.test(text);
}

export function verifyUsername(text: string) {
  return /\s/.test(text);
}
