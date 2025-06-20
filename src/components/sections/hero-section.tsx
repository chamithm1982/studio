
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { TextShimmer } from '@/components/ui/text-shimmer';
import { useEffect } from 'react';
import { renderCanvas } from '@/components/ui/canvas';

const HeroSection = () => {
  useEffect(() => {
    // Ensure canvas is only rendered on client-side and after mount
    if (typeof window !== 'undefined') {
      renderCanvas();
    }
  }, []);

  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center text-center text-white mt-[-100px]">
      <Image
        src="/service1.png"
        alt="Serene salon interior or beautifully styled hair"
        fill={true}
        sizes="100vw"
        style={{ objectFit: 'cover' }}
        quality={90}
        priority
        className="fixed inset-0 z-[-3]"
        data-ai-hint="salon interior"
      />
      <canvas id="canvas" className="fixed inset-0 w-full h-full z-[-2] pointer-events-none"></canvas>
      <div className="fixed inset-0 bg-gradient-to-br from-primary/50 via-black/60 to-accent/30 z-[-1]"></div>
      
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 lg:pt-40 pb-16 md:pb-20 lg:pb-24">
        <h1 className="font-headline font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight !text-white drop-shadow-lg">
          <TextShimmer
            className="[--base-color:theme(colors.white)] [--base-gradient-color:theme(colors.stone.300)] dark:[--base-color:theme(colors.white)] dark:[--base-gradient-color:theme(colors.stone.400)]"
            duration={3}
          >
            Unleash Your Inner Radiance
          </TextShimmer>
        </h1>
        <p className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight !text-white/90 drop-shadow-md">
          Exquisite Hair & Beauty in Dandenong, Victoria.
        </p>
        <p className="font-body text-xs max-w-3xl mx-auto mb-10 !text-white/80 leading-relaxed drop-shadow-sm">
          Escape the Everyday. At Salon B Curls, we craft personalized hair and rejuvenating skin experiences designed to restore your glow and empower your confidence. Step in, unwind, and leave feeling utterly renewed and exquisitely beautiful.
        </p>
        
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold text-lg py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
          <Link href="#book">
            Book Today!
          </Link>
        </Button>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 text-sm !text-white/90">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="font-body">Voted Best Salon in Dandenong</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

