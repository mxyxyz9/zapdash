interface StatsCardProps {
  value: string
  label: string
}

export default function StatsCard({ value, label }: StatsCardProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 bg-white/10 p-6 rounded-[1.5rem] backdrop-blur-sm">
      <div className="text-4xl font-bold text-white">{value}</div>
      <div className="text-sm font-medium text-white">{label}</div>
    </div>
  )
}
