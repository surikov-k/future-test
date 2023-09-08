type SelectOption = {
  value: string,
  label: string
}

export function getSelectedOptions(obj: Record<string, string>): SelectOption[] {
  return Object.entries(obj).map(([value,label]) => ({value, label}))
}
