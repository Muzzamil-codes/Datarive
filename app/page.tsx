import { ContactSalesButton } from "@/components/contact-sales-button"
import { FeatureCard } from "@/components/feature-card"
import { GradientText } from "@/components/gradient-text"
import { HolographicIcon } from "@/components/holographic-icon"
import Image from "next/image"
import { FileText, TrendingUp, BarChart3, Headphones, Server, Brain, Network } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Datarive" width={90} height={90} className="w-[90px] h-[90px]" />
        </div>
        <ContactSalesButton />
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 pt-20 pb-32">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
            Kill Bureaucracy. <br className="hidden md:block" />
            Accelerate Decisions. <br className="hidden md:block" />
            Save millions.
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-9 max-w-3xl mx-auto leading-relaxed">
            Datarive builds <GradientText>Enterprise AI</GradientText> that makes organizations radically faster and
            smarter.
          </p>

          <div className="mb-1">
            <ContactSalesButton size="large" />
          </div>
        </div>
      </section>

      {/* Features Row */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 pt-0 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            title="Automate slow internal processes"
            description="Replace manual workflows with intelligent, self-moving systems"
          />
          <FeatureCard
            title="Flag issues before they cost you"
            description="Our systems analyze your workflows in real time to flag bottlenecks and redundancies"
          />
          <FeatureCard
            title="Focus where it counts"
            description="Automate the routine tasts, so you & your team can work on what really matters"
          />
          <FeatureCard title="Zero learning curve" description="Intuitive interface that works with existing tools" />
        </div>
      </section>

      {/* Enterprise Transformation Dashboard */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        <div className="relative max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-3xl p-8 backdrop-blur-sm border border-purple-500/20">
            {/* Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Enterprise Command Center</h3>
              <p className="text-gray-400">Real-time organizational intelligence</p>
            </div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Efficiency Metrics */}
              <div className="bg-black/30 rounded-xl p-6 border border-purple-500/20">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-semibold text-gray-300">Process Efficiency</h4>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Approval Speed</span>
                    <span className="text-green-400 text-sm font-bold">+340%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-2 rounded-full w-[85%] animate-pulse"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-400">Cost Reduction</span>
                    <span className="text-purple-400 text-sm font-bold">-67%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-2 rounded-full w-[67%] animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* AI Activity Monitor */}
              <div className="bg-black/30 rounded-xl p-6 border border-purple-500/20">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-semibold text-gray-300">AI Operations</h4>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text mb-2">
                    24/7
                  </div>
                  <p className="text-xs text-gray-400 mb-4">Active Processing</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-purple-500/20 rounded p-2">
                      <div className="text-purple-300 font-semibold">1,247</div>
                      <div className="text-gray-400">Tasks/hr</div>
                    </div>
                    <div className="bg-pink-500/20 rounded p-2">
                      <div className="text-pink-300 font-semibold">99.8%</div>
                      <div className="text-gray-400">Accuracy</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decision Intelligence */}
              <div className="bg-black/30 rounded-xl p-6 border border-purple-500/20">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-semibold text-gray-300">Smart Decisions</h4>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-gray-300">Budget Approved</span>
                    <span className="text-xs text-green-400 ml-auto">2m ago</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-xs text-gray-300">Contract Routed</span>
                    <span className="text-xs text-blue-400 ml-auto">5m ago</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-xs text-gray-300">Policy Updated</span>
                    <span className="text-xs text-purple-400 ml-auto">8m ago</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-300">Risk Assessed</span>
                    <span className="text-xs text-pink-400 ml-auto">Now</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Status Bar */}
            <div className="flex items-center justify-between p-4 bg-black/20 rounded-xl border border-purple-500/10">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-400">System Healthy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-xs text-gray-400">12 Departments Connected</span>
                </div>
              </div>
              <div className="text-xs text-gray-400">
                Last updated: <span className="text-purple-400">Live</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Automation Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Automate What Slows You Down</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform manual, time-consuming processes into intelligent workflows that run themselves.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <HolographicIcon size="lg">
                  <Brain className="w-8 h-8" />
                </HolographicIcon>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Tailored AI Systems for your needs</h3>
                <p className="text-gray-400">
                  Systems built to automate what slows <i> you </i> down — not just generic tasks.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <HolographicIcon size="lg">
                  <FileText className="w-8 h-8" />
                </HolographicIcon>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Document Processing & Routing</h3>
                <p className="text-gray-400">
                  Automatically extract, categorize, translate and route documents through approval chains without human
                  intervention.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <HolographicIcon size="lg">
                  <Network className="w-8 h-8" />
                </HolographicIcon>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Inbound + Outbound Ops</h3>
                <p className="text-gray-400">
                  Captures incoming requests, messages & calls, then routes, responds, or escalates them automatically.
                  AI agents can follow up, call, or text on your behalf using LLM-powered conversations tailored to your
                  tone, timing, and goals.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-3xl p-8 backdrop-blur-sm border border-purple-500/20">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-black/20 rounded-xl">
                  <span className="text-sm text-gray-300">Manual Process</span>
                  <span className="text-red-400 text-sm">5-7 days</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                  <div className="mx-4 text-purple-400 font-semibold">AI</div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500"></div>
                </div>
                <div className="flex items-center justify-between p-4 bg-black/20 rounded-xl">
                  <span className="text-sm text-gray-300">Automated Process</span>
                  <span className="text-green-400 text-sm">2-4 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <GradientText>Enterprise AI</GradientText> that actually moves the needle
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Purpose-built for organizations that need to move fast without breaking things.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-3xl p-12 backdrop-blur-sm border border-purple-500/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">60%</div>
                <p className="text-gray-300">Faster Approvals</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-400 mb-2">80%</div>
                <p className="text-gray-300">Process Automation</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-indigo-400 mb-2">24/7</div>
                <p className="text-gray-300">AI Processing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <GradientText>Enterprise AI</GradientText> Transforms Your Organization
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A simple three-step process that integrates seamlessly with your existing systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center relative">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-white font-bold text-xl">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Connect & Analyze</h3>
            <p className="text-gray-400 leading-relaxed">
              Our team analyzes your current processes, identifies bottlenecks, and maps optimization opportunities
              across your organization.
            </p>
            {/* Connection line */}
            <div className="hidden md:block absolute top-8 left-full w-full mx-200 h-0.5 bg-gradient-to-r from-purple-500 to-transparent -translate-x-[10rem]"></div>
          </div>

          <div className="text-center relative">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-white font-bold text-xl">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Automate & Optimize</h3>
            <p className="text-gray-400 leading-relaxed">
              We deploy intelligent, AI powered workflows that handle routine tasks, route decisions to the right
              people, and eliminate wasted time & manpower.
            </p>
            {/* Connection line */}
            <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-pink-500 to-transparent -translate-x-[10rem]"></div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-white font-bold text-xl">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Scale & Improve</h3>
            <p className="text-gray-400 leading-relaxed">
              Continuous learning ensures your automated processes get smarter over time, adapting to new patterns and
              requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise Benefits Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-3xl p-12 backdrop-blur-sm border border-purple-500/20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for Enterprise Scale</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Built on distributed systems designed for high-throughput environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <HolographicIcon size="lg" className="mx-auto mb-4">
                <TrendingUp className="w-8 h-8" />
              </HolographicIcon>
              <h3 className="font-semibold mb-2">Handles millions of tasks simultaneously</h3>
              <p className="text-sm text-gray-400">
                Built on distributed systems designed for high-throughput environments.
              </p>
            </div>

            <div className="text-center">
              <HolographicIcon size="lg" className="mx-auto mb-4">
                <BarChart3 className="w-8 h-8" />
              </HolographicIcon>
              <h3 className="font-semibold mb-2">Real-time dashboards and insights</h3>
              <p className="text-sm text-gray-400">
                Track usage, efficiency gains, and performance metrics from one view.
              </p>
            </div>

            <div className="text-center">
              <HolographicIcon size="lg" className="mx-auto mb-4">
                <Headphones className="w-8 h-8" />
              </HolographicIcon>
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm text-gray-400">Dedicated enterprise support team</p>
            </div>

            <div className="text-center">
              <HolographicIcon size="lg" className="mx-auto mb-4">
                <Server className="w-8 h-8" />
              </HolographicIcon>
              <h3 className="font-semibold mb-2">Custom Deployment</h3>
              <p className="text-sm text-gray-400">On-premise or cloud options available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Footer */}
      <section className="relative z-10 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-8 py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Work shouldn't wait.</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Accelerate decisions, cut delays, and unlock <GradientText>ridiculous execution speeds</GradientText> at
            scale.
          </p>
          <ContactSalesButton size="large" />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image src="/logo.png" alt="Datarive" width={72} height={72} className="w-18 h-18" />
            </div>
            <p className="text-gray-400 text-sm">Contact: ali@datarive.com</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
