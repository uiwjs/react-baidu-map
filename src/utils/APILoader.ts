import { BMap, Config } from '../common/map';

let bmapInited = false;

export default class APILoader {
  config: Config;
  constructor({ akay, version, hostAndPath, callback, protocol }: Config) {
    this.config = { akay, version, hostAndPath, callback, protocol };
    this.config.protocol = (protocol || window.location.protocol) as Config['protocol'];
    if (this.config.protocol!.indexOf(':') === -1) {
      this.config.protocol += ':';
    }
  }

  getScriptSrc(cfg: Config) {
    return `${cfg.protocol}//${cfg.hostAndPath}?v=${cfg.version}&ak=${cfg.akay}&callback=${cfg.callback}`;
  }

  buildScriptTag(src: string) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.dataset.name = 'map';
    // script.async = true;
    // script.defer = true;
    script.src = src;
    return script;
  }
  getBmapPromise(): Promise<BMap> {
    return new Promise((resolve) => {
      if (bmapInited) {
        return resolve((window as any).BMap);
      }
      const script = this.buildScriptTag(this.getScriptSrc(this.config));
      script.type = 'text/javascript';
      script.dataset.name = 'map';
      document.body.appendChild(script);
      (window as any)[this.config.callback!] = () => {
        if (!bmapInited) {
          bmapInited = true;
        }
        resolve((window as any).BMap);
      };
    });
  }

  load() {
    if (typeof window === 'undefined') {
      return null;
    }
    return this.getBmapPromise();
  }
}
