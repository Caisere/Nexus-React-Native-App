export function verifyEmail(text: string) {
  return !/\S+@\S+\.\S+/.test(text);
}