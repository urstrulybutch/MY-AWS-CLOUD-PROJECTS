"use client"

export function HeroImage() {
  return (
    <svg
      width="800"
      height="500"
      viewBox="0 0 800 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full rounded-xl"
    >
      <rect width="800" height="500" fill="#f0f9ff" />
      <circle cx="400" cy="250" r="180" fill="#e0f2fe" />
      <g transform="translate(250, 150)">
        {/* Person 1 */}
        <circle cx="50" cy="50" r="40" fill="#0ea5e9" />
        <circle cx="50" cy="30" r="15" fill="#f8fafc" />
        <rect x="30" y="50" width="40" height="60" rx="10" fill="#0ea5e9" />

        {/* Person 2 */}
        <circle cx="250" cy="50" r="40" fill="#10b981" />
        <circle cx="250" cy="30" r="15" fill="#f8fafc" />
        <rect x="230" y="50" width="40" height="60" rx="10" fill="#10b981" />

        {/* Connection line */}
        <line x1="100" y1="50" x2="200" y2="50" stroke="#94a3b8" strokeWidth="4" strokeDasharray="10,5" />

        {/* Skill icons */}
        <circle cx="150" cy="30" r="20" fill="#f59e0b" />
        <text x="150" y="35" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="16">
          🎸
        </text>

        <circle cx="150" cy="70" r="20" fill="#8b5cf6" />
        <text x="150" y="75" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="16">
          🍳
        </text>
      </g>
      <text x="400" y="400" textAnchor="middle" fill="#334155" fontWeight="bold" fontSize="24">
        Swap Skills. Not Money.
      </text>
    </svg>
  )
}
