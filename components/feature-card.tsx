interface FeatureCardProps {
  title: string
  description: string
}

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="group relative">
      <div
        className="h-full p-6 rounded-2xl transition-all duration-300 hover:scale-105"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10">
          <h3 className="text-lg font-semibold mb-3 text-white">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}
