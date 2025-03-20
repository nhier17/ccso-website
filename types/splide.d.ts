declare module '@splidejs/react-splide' {
  import { ComponentType, ReactNode } from 'react';

  export interface Options {
    type?: string;
    autoplay?: boolean;
    interval?: number;
    pauseOnHover?: boolean;
    resetProgress?: boolean;
    arrows?: boolean;
    pagination?: boolean;
    perPage?: number;
    gap?: string;
    focus?: string;
    height?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  }

  export interface SplideProps {
    options?: Options;
    children?: ReactNode;
    className?: string;
  }

  export const Splide: ComponentType<SplideProps>;
  export const SplideSlide: ComponentType<{ children?: ReactNode }>;
}
