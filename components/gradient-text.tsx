import type React from "react"
interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

export function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-[#714DFF] via-[#9C83FF] via-[31.28%] via-[#E151FF] via-[77.97%] to-[#FFF759] bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: "linear-gradient(50deg, #714DFF, #9C83FF 31.28%, #E151FF 77.97%, #FFF759 95.64%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  )
}
