// types/reactbits.d.ts
declare module '@appletosolutions/reactbits' {
  interface SplashCursorProps {
    color?: string;
    splashRadius?: number;
    duration?: number;
    opacity?: number;
    [key: string]: any; // Allow additional props
  }

  export const SplashCursor: React.FC<SplashCursorProps>;
}