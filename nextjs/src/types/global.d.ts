declare module "wowjs" {
  export class WOW {
    constructor(options?: { live?: boolean });
    init(): void;
  }
  const WOWClass: typeof WOW;
  export default WOWClass;
}

declare module "react-modal-video" {
  import { Component } from "react";

  export interface ModalVideoProps {
    channel: string;
    isOpen: boolean;
    videoId: string;
    onClose: () => void;
    autoplay?: boolean;
    allowFullScreen?: boolean;
    animationSpeed?: number;
    classNames?: {
      modalVideo?: string;
      modalVideoClose?: string;
      modalVideoBody?: string;
      modalVideoInner?: string;
      modalVideoIframeWrap?: string;
      modalVideoCloseBtn?: string;
    };
  }

  export default class ModalVideo extends Component<ModalVideoProps> {}
}

declare global {
  interface Window {
    wow?: {
      init: () => void;
    };
  }
}

export {};
