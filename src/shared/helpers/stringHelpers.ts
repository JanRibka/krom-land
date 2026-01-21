// Pomocná funkce pro převod klíčů z PascalCase na camelCase
export function mapKeysToCamelCase(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(mapKeysToCamelCase);
  } else if (obj !== null && typeof obj === "object") {
    return Object.keys(obj).reduce((acc, key) => {
      const camelKey = key.charAt(0).toLowerCase() + key.slice(1);
      acc[camelKey] = mapKeysToCamelCase(obj[key]);
      return acc;
    }, {} as any);
  }
  return obj;
}
