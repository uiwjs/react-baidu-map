const _importedScript: { [src: string]: true } = {};

/**
 * load dependency by css tag
 */
export function requireCss(src: string): Promise<void> {
  const headElement = document && (document.head || document.getElementsByTagName('head')[0]);

  return new Promise((resolve, reject) => {
    if (!document || src in _importedScript) {
      resolve();
      return;
    }
    const script = document.createElement('link');
    script.type = 'text/css';
    script.rel = 'stylesheet';
    script.href = src;
    script.onerror = (err) => {
      headElement!.removeChild(script);
      reject(new URIError(`The css ${src} is no accessible.`));
    };
    script.onload = () => {
      _importedScript[src] = true;
      resolve();
    };
    headElement!.appendChild(script);
  });
}

/**
 * load dependency by script tag
 */
export function requireScript(src: string): Promise<void> {
  const headElement = document && (document.head || document.getElementsByTagName('head')[0]);

  return new Promise((resolve, reject) => {
    if (!document || src in _importedScript) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = '_react_baidu_map';
    script.src = src;
    script.async = true;
    script.defer = true;
    script.onerror = (err) => {
      headElement!.removeChild(script);
      reject(new URIError(`The Script ${src} is no accessible.`));
    };
    script.onload = () => {
      _importedScript[src] = true;
      resolve();
    };
    headElement!.appendChild(script);
  });
}
