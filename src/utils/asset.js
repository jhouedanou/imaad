// Résout un chemin d'asset : URL externe inchangée, chemin local préfixé par BASE_URL.
export function asset(path) {
  if (!path) return ''
  if (/^https?:\/\//.test(path)) return path
  return import.meta.env.BASE_URL + path.replace(/^\//, '')
}
