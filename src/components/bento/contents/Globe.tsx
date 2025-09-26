"use client";

import { cls } from "@/lib/utils";
import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [0, 0, 0],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [30.0444, 31.2357], size: 0.07 },
    { location: [39.9042, 116.4074], size: 0.08 },
    { location: [-23.5505, -46.6333], size: 0.1 },
    { location: [19.4326, -99.1332], size: 0.1 },
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [34.6937, 135.5022], size: 0.05 },
    { location: [41.0082, 28.9784], size: 0.06 },
  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeRef = useRef<{ destroy: () => void } | null>(null);
  const phiRef = useRef(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const onRender = useCallback(
    (state: Record<string, number>) => {
      phiRef.current += 0.005;
      state.phi = phiRef.current;
      state.width = dimensions.width * 2;
      state.height = dimensions.width * 2;
    },
    [dimensions]
  );

  const onResize = useCallback(() => {
    if (canvasRef.current) {
      const newWidth = canvasRef.current.offsetWidth;
      setDimensions({ width: newWidth, height: newWidth });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    onResize();

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [onResize]);

  useEffect(() => {
    if (!canvasRef.current || dimensions.width === 0) return;

    if (globeRef.current) {
      globeRef.current.destroy();
    }

    globeRef.current = createGlobe(canvasRef.current, {
      ...config,
      width: dimensions.width * 2,
      height: dimensions.width * 2,
      onRender,
    });

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    });

    return () => {
      if (globeRef.current) {
        globeRef.current.destroy();
        globeRef.current = null;
      }
    };
  }, [dimensions, config, onRender]);

  return (
    <div
      className={cls(
        "absolute inset-0 mx-auto w-full aspect-square",
        className
      )}
    >
      <canvas
        className="size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        ref={canvasRef}
      />
    </div>
  );
}
