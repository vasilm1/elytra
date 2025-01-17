"use client";

import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const logos = [
  { 
    src: '/logos/pytorch.png', 
    alt: 'PyTorch',
    description: 'Deep learning framework with strong GPU acceleration'
  },
  { 
    src: '/logos/tensorflow.png', 
    alt: 'TensorFlow',
    description: 'End-to-end machine learning platform'
  },
  { 
    src: '/logos/jax.png', 
    alt: 'JAX',
    description: 'High-performance numerical computing and ML research'
  },
  { 
    src: '/logos/scikit.png', 
    alt: 'Scikit-learn',
    description: 'Simple and efficient tools for data analysis'
  },
  { 
    src: '/logos/xgboost.png', 
    alt: 'XGBoost',
    description: 'Optimized gradient boosting machine learning'
  },
  { 
    src: '/logos/keras.png', 
    alt: 'Keras',
    description: 'Deep learning API designed for human beings'
  },
  { 
    src: '/logos/langchain.png', 
    alt: 'LangChain',
    description: 'Building applications with LLMs through composability'
  },
  { 
    src: '/logos/huggingface.png', 
    alt: 'Hugging Face',
    description: 'Hub for state-of-the-art machine learning models'
  },
  { 
    src: '/logos/llamaindex.png', 
    alt: 'LlamaIndex',
    description: 'Data framework for LLM applications'
  },
  { 
    src: '/logos/vscode.png', 
    alt: 'VSCode',
    description: 'Powerful source code editor with AI integrations'
  },
  { 
    src: '/logos/docker.png', 
    alt: 'Docker',
    description: 'Platform for developing and scaling applications'
  },
  { 
    src: '/logos/kubernetes.png', 
    alt: 'Kubernetes',
    description: 'Container orchestration for scaling ML workloads'
  },
];

const LogoScroll = () => {
  return (
    <TooltipProvider delayDuration={0}>
      <div className="relative w-full py-12 mt-24">
        <div className="overflow-hidden">
          <div className="animate-scroll flex">
            {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
              <Tooltip key={i}>
                <TooltipTrigger asChild>
                  <button className="w-20 h-20 flex-shrink-0 relative transition-transform hover:scale-110 inline-block focus:outline-none">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain brightness-125"
                    />
                  </button>
                </TooltipTrigger>
                <TooltipContent 
                  side="top"
                  sideOffset={5}
                  className="z-[100] bg-gray-900/90 border-gray-800"
                >
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-white">{logo.alt}</p>
                    <p className="text-sm text-gray-300">{logo.description}</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default LogoScroll; 