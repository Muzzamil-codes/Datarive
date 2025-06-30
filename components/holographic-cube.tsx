import type React from "react"

interface HolographicCubeProps {
  icon: React.ReactNode
  className?: string
}

export function HolographicCube({ icon, className = "" }: HolographicCubeProps) {
  return (
    <div className={`relative w-16 h-16 group ${className}`}>
      {/* 3D Cube Container */}
      <div
        className="relative w-full h-full transition-all duration-500 group-hover:scale-110"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(15deg) rotateY(15deg)",
        }}
      >
        {/* Front face */}
        <div
          className="absolute inset-0 rounded-lg flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, rgba(114, 77, 255, 0.4), rgba(225, 81, 255, 0.4))",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            boxShadow: "0 0 20px rgba(114, 77, 255, 0.5)",
            transform: "translateZ(8px)",
          }}
        >
          <div className="text-white text-xl" style={{ filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.8))" }}>
            {icon}
          </div>
        </div>

        {/* Top face */}
        <div
          className="absolute inset-0 rounded-lg"
          style={{
            background: "linear-gradient(135deg, rgba(156, 131, 255, 0.3), rgba(114, 77, 255, 0.3))",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            transform: "rotateX(90deg) translateZ(8px)",
            transformOrigin: "top",
          }}
        />

        {/* Right face */}
        <div
          className="absolute inset-0 rounded-lg"
          style={{
            background: "linear-gradient(135deg, rgba(225, 81, 255, 0.2), rgba(156, 131, 255, 0.2))",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            transform: "rotateY(90deg) translateZ(8px)",
            transformOrigin: "right",
          }}
        />
      </div>

      {/* Holographic scan lines */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div
          className="absolute inset-0 rounded-lg"
          style={{
            background: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0, 255, 255, 0.1) 2px,
              rgba(0, 255, 255, 0.1) 4px
            )`,
            animation: "scan 3s linear infinite",
          }}
        />
      </div>

      {/* Energy field */}
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "radial-gradient(circle at center, rgba(0, 255, 255, 0.2), transparent 70%)",
          filter: "blur(10px)",
          transform: "scale(1.5)",
          animation: "pulse 2s ease-in-out infinite",
        }}
      />
    </div>
  )
}
