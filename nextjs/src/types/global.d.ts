declare module "wowjs" {
  export class WOW {
    constructor(options?: { live?: boolean });
    init(): void;
  }
  export default WOW;
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
