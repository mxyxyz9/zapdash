export default function StatsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Key Market Metrics
            </h2>
            <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
              India's quick commerce market is experiencing explosive growth, creating a massive opportunity for our
              innovative solution.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center justify-center space-y-2 bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-4xl font-bold text-white">$9.7B</div>
            <div className="text-sm font-medium text-white">Market Size by 2029</div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-4xl font-bold text-white">16.07%</div>
            <div className="text-sm font-medium text-white">Annual Growth Rate</div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-4xl font-bold text-white">₹700</div>
            <div className="text-sm font-medium text-white">Monthly Savings per EV</div>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-4xl font-bold text-white">30%</div>
            <div className="text-sm font-medium text-white">Lower Operational Costs</div>
          </div>
        </div>
      </div>
    </section>
  )
}
