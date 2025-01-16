"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { 
  BrainCircuit, 
  Cpu, 
  Blocks, 
  FileCode as PythonIcon, 
  Wrench as RustIcon, 
  Settings as NodeIcon 
} from 'lucide-react';
import { JetBrains_Mono } from 'next/font/google';

const jetbrains = JetBrains_Mono({ subsets: ['latin'] });

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[#0A0F1E]">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Darker, more professional gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E] via-[#0F1629] to-[#141B32]" />
        
        {/* More subtle glow effects */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full bg-blue-500/5 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] rounded-full bg-purple-500/5 blur-[120px]" />
      </div>

      {/* Content Container */}
      <div className="relative mx-auto max-w-7xl px-6 py-20 min-h-screen flex flex-col justify-center">
        {/* Main Content */}
        <div className="mx-auto max-w-3xl text-center space-y-8">
          {/* Title */}
          <div className="relative flex justify-center overflow-visible py-4">
            <h1 className={`${jetbrains.className} text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white relative z-10 
              bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/70`}>
              Elytra Linux
            </h1>
            <div className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent blur-xl" />
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300/90 max-w-2xl mx-auto leading-relaxed">
            A Linux distribution built for AI development and agent frameworks.
            Pre-configured with essential AI tools and development environments.
          </p>

          {/* Feature Tags */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* AI-Ready Tag */}
            <div className="group relative transform hover:-translate-y-1 transition-all duration-200">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-sm translate-y-[4px] group-hover:translate-y-2" />
              <div className="relative flex items-center gap-2 bg-[#1a2236] px-5 py-2.5 rounded-full border border-blue-500/20
                shadow-lg shadow-blue-500/20 backdrop-blur-sm">
                <BrainCircuit className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-medium">AI-Ready</span>
              </div>
            </div>

            {/* Agent Frameworks Tag */}
            <div className="group relative transform hover:-translate-y-1 transition-all duration-200">
              <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-sm translate-y-[4px] group-hover:translate-y-2" />
              <div className="relative flex items-center gap-2 bg-[#1a2236] px-5 py-2.5 rounded-full border border-purple-500/20
                shadow-lg shadow-purple-500/20 backdrop-blur-sm">
                <Cpu className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-medium">Agent Frameworks</span>
              </div>
            </div>

            {/* Dev Tools Tag */}
            <div className="group relative transform hover:-translate-y-1 transition-all duration-200">
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-sm translate-y-[4px] group-hover:translate-y-2" />
              <div className="relative flex items-center gap-2 bg-[#1a2236] px-5 py-2.5 rounded-full border border-green-500/20
                shadow-lg shadow-green-500/20 backdrop-blur-sm">
                <Blocks className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-medium">Dev Tools</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-6">
            <Link href="/download">
              <Button 
                size="lg" 
                className="relative px-8 py-3 bg-blue-500 text-white font-medium rounded-lg
                  transform hover:-translate-y-1 transition-all duration-200
                  before:absolute before:inset-0 before:bg-blue-600 before:-z-10 before:translate-y-[4px] before:rounded-lg
                  hover:before:translate-y-1
                  active:translate-y-0.5 active:before:translate-y-0
                  shadow-xl shadow-blue-500/20"
              >
                Download Elytra
              </Button>
            </Link>
            <Link href="/docs">
              <Button 
                variant="outline" 
                size="lg" 
                className="relative px-8 py-3 bg-[#0A0F1E] text-gray-300 font-medium rounded-lg border border-gray-800
                  transform hover:-translate-y-1 transition-all duration-200
                  before:absolute before:inset-0 before:bg-gray-900 before:-z-10 before:translate-y-[4px] before:rounded-lg
                  hover:before:translate-y-1
                  active:translate-y-0.5 active:before:translate-y-0
                  shadow-xl shadow-black/20"
              >
                Learn More
              </Button>
            </Link>
          </div>

          {/* Framework Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 -mx-16 lg:-mx-32 xl:-mx-48">
            {/* SwarmNode */}
            <a 
              href="https://docs.swarmnode.ai/docs/sdk/introduction" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${jetbrains.className} group p-8 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 
                hover:border-blue-500/50 transition-all duration-300 hover:bg-gray-900/70 
                hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/20
                relative before:absolute before:inset-0 before:bg-gradient-to-br 
                before:from-blue-500/5 before:to-purple-500/5 before:rounded-xl before:-z-10 
                before:translate-y-[6px] before:opacity-0 hover:before:opacity-100 before:transition-all`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />
              <div className="relative">
                <Image
                  src="/images/swarmnode-logo.png"
                  alt="SwarmNode Logo"
                  width={52}
                  height={52}
                  className="mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-xl font-bold text-white text-center mb-3 tracking-tight">SwarmNode</h3>
                <p className="text-sm text-gray-400 text-center mb-4">Python SDK for agent building and execution</p>
                <div className="text-sm text-cyan-400/90 text-center p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20
                  backdrop-blur-sm shadow-lg shadow-cyan-500/5">
                  pip install swarmnode
                </div>
              </div>
            </a>

            {/* ElizaOS */}
            <a 
              href="https://github.com/ElizaOS/eliza" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${jetbrains.className} group p-8 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 
                hover:border-purple-500/50 transition-all duration-300 hover:bg-gray-900/70 
                hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20
                relative before:absolute before:inset-0 before:bg-gradient-to-br 
                before:from-purple-500/5 before:to-indigo-500/5 before:rounded-xl before:-z-10 
                before:translate-y-[6px] before:opacity-0 hover:before:opacity-100 before:transition-all`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />
              <div className="relative">
                <Image
                  src="/images/eliza-logo.png"
                  alt="ElizaOS Logo"
                  width={52}
                  height={52}
                  className="mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-xl font-bold text-white text-center mb-3 tracking-tight">ElizaOS/eliza</h3>
                <p className="text-sm text-gray-400 text-center mb-4">Advanced agent framework for autonomous AI systems</p>
              </div>
            </a>

            {/* Rig */}
            <a 
              href="https://github.com/0xPlayground/rig" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${jetbrains.className} group p-8 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 
                hover:border-orange-500/50 transition-all duration-300 hover:bg-gray-900/70 
                hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/20
                relative before:absolute before:inset-0 before:bg-gradient-to-br 
                before:from-orange-500/5 before:to-red-500/5 before:rounded-xl before:-z-10 
                before:translate-y-[6px] before:opacity-0 hover:before:opacity-100 before:transition-all`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />
              <div className="relative">
                <Image
                  src="/images/rig-logo.png"
                  alt="0xPlayground/Rig Logo"
                  width={52}
                  height={52}
                  className="mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-xl font-bold text-white text-center mb-3 tracking-tight">0xPlayground/Rig</h3>
                <p className="text-sm text-gray-400 text-center mb-4">Modular framework for AI agent development</p>
              </div>
            </a>

            {/* Swarms */}
            <a 
              href="https://docs.swarms.world/en/latest/swarms/install/install/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`${jetbrains.className} group p-8 rounded-xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 
                hover:border-indigo-500/50 transition-all duration-300 hover:bg-gray-900/70 
                hover:scale-105 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/20
                relative before:absolute before:inset-0 before:bg-gradient-to-br 
                before:from-indigo-500/5 before:to-blue-500/5 before:rounded-xl before:-z-10 
                before:translate-y-[6px] before:opacity-0 hover:before:opacity-100 before:transition-all`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />
              <div className="relative">
                <Image
                  src="/images/swarms-logo.png"
                  alt="Swarms Logo"
                  width={52}
                  height={52}
                  className="mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-xl font-bold text-white text-center mb-3 tracking-tight">Swarms</h3>
                <p className="text-sm text-gray-400 text-center mb-4">Ultimate Multi-Agent LLM Framework</p>
                <div className="text-sm text-indigo-400/90 text-center p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20
                  backdrop-blur-sm shadow-lg shadow-indigo-500/5">
                  pip install swarms
                </div>
              </div>
            </a>
          </div>

          {/* Screenshot Section */}
          <div className="mt-16 relative rounded-xl overflow-hidden -mx-12 lg:-mx-32 xl:-mx-48">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-xl blur-2xl group-hover:opacity-75 transition-opacity opacity-50" />
              <Image
                src="/images/screenshot.png"
                alt="Elytra Linux Screenshot"
                width={2432}
                height={1442}
                className="relative rounded-xl shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Description Section */}
          <div className="mt-16 text-center max-w-4xl mx-auto">
            <h2 className={`${jetbrains.className} text-3xl font-bold text-white mb-6`}>
              The First Linux Distribution Built for AI Development
            </h2>
            <p className="text-lg text-gray-300/90 leading-relaxed mb-8">
              Elytra Linux revolutionizes the development experience by providing a complete, pre-configured environment for AI development. 
              Skip the complex setup process and dive straight into building with popular frameworks and tools pre-installed and ready to use.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <span>Pre-configured AI/ML Tools</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                <span>Popular Agent Frameworks</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400" />
                <span>Development Environments</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                <span>Optimized Performance</span>
              </div>
            </div>
          </div>

          {/* Pre-installed Tools Section */}
          <div className="mt-24 text-center max-w-6xl mx-auto">
            <h2 className={`${jetbrains.className} text-3xl font-bold text-white mb-8`}>
              Pre-installed AI Development Stack
            </h2>
            
            {/* Tools Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
              {/* ML/DL Frameworks */}
              <div className="group bg-gray-900/50 hover:bg-gray-900/70 backdrop-blur-sm rounded-xl p-8 border border-gray-800 transition-all
                hover:border-blue-500/20 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="flex flex-col items-center gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <BrainCircuit className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-3">ML/DL Frameworks</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      PyTorch, TensorFlow, JAX, Scikit-learn, XGBoost, and more for all your machine learning needs.
                    </p>
                  </div>
                </div>
              </div>

              {/* LLM Tools */}
              <div className="group bg-gray-900/50 hover:bg-gray-900/70 backdrop-blur-sm rounded-xl p-8 border border-gray-800 transition-all
                hover:border-purple-500/20 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="flex flex-col items-center gap-4">
                  <div className="p-3 bg-purple-500/10 rounded-lg">
                    <Cpu className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-3">LLM Tools</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      LangChain, LlamaIndex, Hugging Face Transformers, vLLM, and AutoGPT for advanced language models.
                    </p>
                  </div>
                </div>
              </div>

              {/* Agent Frameworks */}
              <div className="group bg-gray-900/50 hover:bg-gray-900/70 backdrop-blur-sm rounded-xl p-8 border border-gray-800 transition-all
                hover:border-green-500/20 hover:shadow-lg hover:shadow-green-500/10">
                <div className="flex flex-col items-center gap-4">
                  <div className="p-3 bg-green-500/10 rounded-lg">
                    <Blocks className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-3">Agent Frameworks</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      SwarmNode, ElizaOS, Rig Framework, CrewAI, and AutoGen for building autonomous agents.
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Science */}
              <div className="group bg-gray-900/50 hover:bg-gray-900/70 backdrop-blur-sm rounded-xl p-8 border border-gray-800 transition-all
                hover:border-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/10">
                <div className="flex flex-col items-center gap-4">
                  <div className="p-3 bg-indigo-500/10 rounded-lg">
                    <PythonIcon className="w-8 h-8 text-indigo-400" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-3">Data Science</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      NumPy, Pandas, Jupyter Lab, Matplotlib, Dask, and DuckDB for data processing and visualization.
                    </p>
                  </div>
                </div>
              </div>

              {/* Development Tools */}
              <div className="group bg-gray-900/50 hover:bg-gray-900/70 backdrop-blur-sm rounded-xl p-8 border border-gray-800 transition-all
                hover:border-orange-500/20 hover:shadow-lg hover:shadow-orange-500/10">
                <div className="flex flex-col items-center gap-4">
                  <div className="p-3 bg-orange-500/10 rounded-lg">
                    <RustIcon className="w-8 h-8 text-orange-400" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-3">Development Tools</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      VSCode, Git, Docker, Kubernetes, CUDA Toolkit, and MLflow for seamless development.
                    </p>
                  </div>
                </div>
              </div>

              {/* Optimization Tools */}
              <div className="group bg-gray-900/50 hover:bg-gray-900/70 backdrop-blur-sm rounded-xl p-8 border border-gray-800 transition-all
                hover:border-red-500/20 hover:shadow-lg hover:shadow-red-500/10">
                <div className="flex flex-col items-center gap-4">
                  <div className="p-3 bg-red-500/10 rounded-lg">
                    <NodeIcon className="w-8 h-8 text-red-400" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-white mb-3">Optimization Tools</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      TensorRT, OpenVINO, Triton Server, Ray, and NVIDIA tools for maximum performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
