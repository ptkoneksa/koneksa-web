import { TalentContactType } from "$lib/api/models/konvy";

export function formatKonvyTalentContactLink(
  type: TalentContactType,
  value: string
) {
  if (type === TalentContactType.EMAIL) {
    return `mailto:${value}`;
  }
  if (type === TalentContactType.WHATSAPP) {
    return `https://wa.me/${value.replace(/[^0-9]/g, "")}`.replace(/^0/, "62");
  }
  if (type === TalentContactType.TELEGRAM) {
    return `https://t.me/${value.replace(/[^a-zA-Z0-9]/g, "")}`;
  }
  if (type === TalentContactType.INSTAGRAM) {
    return `https://www.instagram.com/${value.replace(/[^a-zA-Z0-9]/g, "")}`;
  }
  return value;
}
