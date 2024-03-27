export const format_currency = Intl.NumberFormat("en", {
  style: "currency",
  currency: "USD",
  notation: "compact",
}).format;

export const format_percent = Intl.NumberFormat("en", {
  style: "percent",
  maximumFractionDigits: 2,
}).format;
