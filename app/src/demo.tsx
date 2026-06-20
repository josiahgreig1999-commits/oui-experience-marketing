import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button"

export default function DemoOne() {
  return (
    <div className="dark flex min-h-screen flex-col items-center justify-center gap-12 bg-neutral-900">
      <div className="relative h-[200px] w-[800px] max-w-full">
        <LiquidButton className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          Liquid Glass
        </LiquidButton>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6">
        <MetalButton variant="default">Default</MetalButton>
        <MetalButton variant="primary">Primary</MetalButton>
        <MetalButton variant="success">Success</MetalButton>
        <MetalButton variant="error">Error</MetalButton>
        <MetalButton variant="gold">Gold</MetalButton>
        <MetalButton variant="bronze">Bronze</MetalButton>
      </div>
    </div>
  )
}
