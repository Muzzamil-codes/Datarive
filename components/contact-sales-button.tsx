"use client"

interface ContactSalesButtonProps {
  size?: "default" | "large"
  className?: string
  href?: string // <- added
}

export function ContactSalesButton({
  size = "default",
  className = "",
  href = "https://tally.so/r/wgVbVM", // <- default link
}: ContactSalesButtonProps) {
  const baseClasses =
    "relative inline-flex items-center justify-center font-semibold text-white transition-all duration-300 hover:scale-105 active:scale-95"
  const sizeClasses =
    size === "large" ? "px-12 py-4 text-lg rounded-2xl" : "px-8 py-3 text-base rounded-xl"

  const style = {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
  } as React.CSSProperties

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${sizeClasses} ${className}`}
      style={style}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)"
        e.currentTarget.style.boxShadow =
          "0 12px 40px rgba(114, 77, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)"
        e.currentTarget.style.boxShadow =
          "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
      }}
    >
      Contact Sales
    </a>
  )
}
