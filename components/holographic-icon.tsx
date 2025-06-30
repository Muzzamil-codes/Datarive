import type React from "react"

interface HolographicIconProps {
  children: React.ReactNode
  className?: string
  size?: "sm" | "md" | "lg"
}

export function HolographicIcon({ children, className = "", size = "md" }: HolographicIconProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }

  return (
    <div className={`${sizeClasses[size]} relative group ${className}`}>
      {/* Main holographic container */}
      <div
        className="w-full h-full rounded-lg flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:scale-110"
        style={{
          background:
            "linear-gradient(135deg, rgba(114, 77, 255, 0.3), rgba(225, 81, 255, 0.3), rgba(156, 131, 255, 0.3))",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: `
            0 0 20px rgba(114, 77, 255, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.3),
            inset 0 -1px 0 rgba(0, 0, 0, 0.2)
          `,
        }}
      >
        {/* Holographic shimmer effect */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)",
            animation: "shimmer 2s infinite",
          }}
        />

        {/* 3D depth layers */}
        <div
          className="absolute inset-0 rounded-lg opacity-50"
          style={{
            background: "linear-gradient(225deg, rgba(255, 255, 255, 0.1), transparent 50%)",
            transform: "translateZ(1px)",
          }}
        />

        {/* Icon content with 3D effect */}
        <div
          className="relative z-10 text-white transition-all duration-300 group-hover:text-cyan-200"
          style={{
            filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))",
            textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
          }}
        >
          {children}
        </div>

        {/* Glow effect */}
        <div
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: "radial-gradient(circle at center, rgba(114, 77, 255, 0.3), transparent 70%)",
            filter: "blur(8px)",
            transform: "scale(1.2)",
          }}
        />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
          style={{ top: "20%", left: "80%", animationDelay: "0s" }}
        />
        <div
          className="absolute w-1 h-1 bg-purple-400 rounded-full animate-ping"
          style={{ top: "70%", left: "20%", animationDelay: "0.5s" }}
        />
        <div
          className="absolute w-1 h-1 bg-pink-400 rounded-full animate-ping"
          style={{ top: "40%", left: "90%", animationDelay: "1s" }}
        />
      </div>
    </div>
  )
}
