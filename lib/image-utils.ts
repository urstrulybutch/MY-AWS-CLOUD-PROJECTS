export function getImageUrl(path: string): string {
  // If it's already a full URL, return it
  if (path.startsWith("http")) {
    return path
  }

  // If it's a placeholder path, extract dimensions
  if (path.includes("placeholder.svg")) {
    const heightMatch = path.match(/height=(\d+)/)
    const widthMatch = path.match(/width=(\d+)/)

    const height = heightMatch ? Number.parseInt(heightMatch[1]) : 100
    const width = widthMatch ? Number.parseInt(widthMatch[1]) : 100

    // Return a data URL for a simple colored rectangle
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'%3E%3Crect width='${width}' height='${height}' fill='%23f0f0f0'/%3E%3C/svg%3E`
  }

  // Otherwise, assume it's a local path
  return path
}
