declare module 'react' {
  interface DOMAttributes<T> {
    inert?: '';
  }
}

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      inert?: '';
    }
  }
}

export {};
