"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "@studio-freight/react-lenis";

const lerp = (start, end, factor) => start + (end - start) * factor;

function ParallaxImage({ src, alt }) {
    const imageRef = useRef(null);
    const bounds = useRef(null);
    const currentTranslateY = useRef(0);
    const targetTranslateY = useRef(0);
    const animationFrameId = useRef(null);

    const updateBounds = () => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            bounds.current = {
                top: rect.top + window.scrollY,
                bottom: rect.bottom + window.scrollY,
                height: rect.height,
            };
        }
    };

    const animate = () => {
        if (imageRef.current) {
            currentTranslateY.current = lerp(
                currentTranslateY.current,
                targetTranslateY.current,
                0.1 // Adjust this value for faster/slower smoothing
            );

            // Apply transform only if there's a significant difference to prevent redundant updates
            if (
                Math.abs(currentTranslateY.current - targetTranslateY.current) > 0.1
            ) {
                imageRef.current.style.transform = `translateY(${currentTranslateY.current}px) scale(1.25)`;
            }
        }
        animationFrameId.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        // Initialize bounds and set up listeners
        updateBounds();
        window.addEventListener("resize", updateBounds);

        // Start the animation loop
        animationFrameId.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("resize", updateBounds);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, []);

    useLenis(({ scroll }) => {
        if (!bounds.current) return;

        // Calculate the relative scroll position within the bounds
        const relativeScroll = scroll - bounds.current.top;

        // Set targetTranslateY to a fraction of the relative scroll
        targetTranslateY.current = relativeScroll * 0.2;

        // Clamp targetTranslateY to prevent the image from moving excessively
        const maxOffset = bounds.current.height * 0.2; // Adjustable
        targetTranslateY.current = Math.min(
            Math.max(targetTranslateY.current, -maxOffset),
            maxOffset
        );
    });

    return (
        <img
            ref={imageRef}
            src={src}
            alt={alt}
            style={{
                willChange: "transform",
                transform: "translateY(0) scale(1.25)",
            }}
        />
    );
}

export default ParallaxImage;