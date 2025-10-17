export function formatKonvyTalentContactLink(type: string, value: string) {
  if (type === "EMAIL") {
    return `mailto:${value}`;
  }
  if (type === "WHATSAPP") {
    return `https://wa.me/${value.replace(/[^0-9]/g, "")}`.replace(/^0/, "62");
  }
  if (type === "TELEGRAM") {
    return `https://t.me/${value.replace(/[^a-zA-Z0-9]/g, "")}`;
  }
  if (type === "INSTAGRAM") {
    return `https://www.instagram.com/${value.replace(/[^a-zA-Z0-9]/g, "")}`;
  }
  return value;
}
