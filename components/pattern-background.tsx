import type React from "react"

interface PatternBackgroundProps {
  children: React.ReactNode
}

export default function PatternBackground({ children }: PatternBackgroundProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-teal-50 to-blue-50">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/pattern-bg.svg')] bg-repeat"></div>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
