export function stringToROTD(rotd: string) {
  // public folder format: /specialROTD.png, /artROTD.png, dll
  return `/rotd/${rotd}ROTD.png`;
}
