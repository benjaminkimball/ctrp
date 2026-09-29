export function createId(length = 12): string {
  const alphabet = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789";
  const bytes = crypto.getRandomValues(new Uint8Array(length));

  let id = "";
  for (let i = 0; i < bytes.length; i++) {
    id += alphabet[Math.abs(bytes[i] % alphabet.length)];
  }

  return id;
}
