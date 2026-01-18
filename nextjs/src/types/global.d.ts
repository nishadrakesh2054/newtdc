declare module "wowjs" {
  export class WOW {
    constructor(options?: { live?: boolean });
    init(): void;
  }
  const WOWClass: typeof WOW;
  export default WOWClass;
}

// ModalVideo types are handled by @types/react-modal-video package

declare global {
  interface Window {
    wow?: {
      init: () => void;
    };
  }
}

export {};
