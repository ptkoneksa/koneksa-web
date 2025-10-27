export function maskEmail(email: string) {
  const parts = email.split("@");
  const username = parts[0];
  const domain = parts[1];
  const stars = "*".repeat(
    username.length > 2 ? username.length - 2 : username.length
  );
  return `${username.slice(0, 1)}${stars}${username.slice(
    username.length - 1
  )}@${domain}`;
}
