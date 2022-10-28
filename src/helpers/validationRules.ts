export function required(value: string): boolean | string {
  return !!value.length || 'Veld is verplicht';
}

export function emailRule(value: string): boolean | string{
  const re = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

  return re.test(value) || 'E-mail must be valid';
}

export function passwordRule(value: string): boolean | string {
  return value.length <= 255 || 'Password must be shorter than 255 characters';
}