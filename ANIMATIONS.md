# Framer Motion Animations - Ultra Pharma

## Overview
This document outlines all the smooth animations and transitions implemented using Framer Motion throughout the Ultra Pharma website.

## Components Created/Enhanced

### 1. **Page Transition** (`components/page-transition.tsx`)
- Wraps entire page content
- Fade-in and slide-up animation on page load
- Duration: 0.6s with easeInOut

### 2. **Scroll Animation** (`components/scroll-animation.tsx`)
- Triggers animations when elements enter viewport
- Uses `react-intersection-observer`
- Configurable delay for stagger effects
- Fade-in with slide-up animation

### 3. **Smooth Scroll** (`components/smooth-scroll.tsx`)
- Handles smooth scrolling for anchor links
- Intercepts hash link clicks
- Smooth scroll behavior with URL updates

### 4. **Fade In View** (`components/fade-in-view.tsx`)
- Advanced scroll-triggered animations
- Supports 4 directions: up, down, left, right
- Configurable duration and delay
- Custom easing curve for smooth motion

### 5. **Enhanced Navigation** (`components/navigation.tsx`)
- Slide-down entrance animation on page load
- Smooth background blur transition on scroll
- Animated mobile menu with stagger effect
- AnimatePresence for smooth menu open/close

## Page Animations (`app/page.tsx`)

### Hero Section
- **Eyebrow badge**: Fade-in + slide-up (delay: 0.2s)
- **Main headline**: Fade-in + slide-up (delay: 0.4s, duration: 0.8s)
- **Supporting text**: Fade-in + slide-up (delay: 0.6s)
- **CTA buttons**: Fade-in + slide-up (delay: 0.8s)

### Services Section
- **Section header**: ScrollAnimation wrapper
- **Service cards**: 
  - Individual ScrollAnimation with staggered delays (0.1s increments)
  - Hover effect: Scale 1.02 + lift -5px
  - Smooth transitions on hover

### Differentiators Section
- **Section header**: ScrollAnimation wrapper
- **Differentiator cards**:
  - Staggered entrance (0.1s increments)
  - Hover effect: Scale 1.02 + lift -8px
  - Smooth card interactions

### Contact Section
- **Section header**: ScrollAnimation (delay: 0s)
- **CTA buttons**: ScrollAnimation (delay: 0.2s)
- **Contact info card**: ScrollAnimation (delay: 0.3s)
- **Contact form**: ScrollAnimation (delay: 0.4s)

## Animation Timing & Easing

### Standard Durations
- Quick interactions: 0.3s
- Standard entrance: 0.6s
- Emphasis entrance: 0.8s

### Easing Functions
- Page transitions: `easeInOut`
- Scroll animations: `easeOut`
- Navigation: `easeOut`
- Custom fade-in: `[0.21, 0.47, 0.32, 0.98]` (cubic-bezier)

### Stagger Delays
- Service cards: 0.1s per card
- Differentiator cards: 0.1s per card
- Mobile menu items: 0.1s per item

## Hover Effects

### Interactive Elements
- **Service cards**: Scale 1.02, translateY -5px
- **Differentiator cards**: Scale 1.02, translateY -8px
- **Navigation scroll indicator**: Scale 1.1
- **CTA buttons**: Scale 1.01 with shadow enhancement

## Performance Considerations

1. **Intersection Observer**: Used for scroll-triggered animations to optimize performance
2. **Once trigger**: Most scroll animations trigger only once to prevent re-animation
3. **Transform-based animations**: Using transform properties for GPU acceleration
4. **Passive scroll listeners**: Scroll events use passive listeners

## Browser Support

All animations use Framer Motion which provides:
- Automatic fallbacks for older browsers
- Hardware acceleration where available
- Reduced motion support (respects `prefers-reduced-motion`)

## Future Enhancements

Potential additions:
- Page route transitions
- Loading skeleton animations
- Parallax scroll effects
- Micro-interactions on form inputs
- Animated statistics/counters
