export function formatNumberShort(num: number) {
  const absoluteNum = Math.abs(num);

  if (absoluteNum >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }

  if (absoluteNum >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }

  return num.toLocaleString("id-ID");
}
