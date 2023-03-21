import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function debounce<T extends any[]>(func: (...args: T) => void, wait: number) {
  let timeout: ReturnType<typeof setTimeout>;
  return function (...args: T) {
    // @ts-ignore
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

function scrollTop(offsetTop: number) {
  document.documentElement.scrollTo(0, offsetTop);
}

export const useHyperlink = (dom: HTMLDivElement | null) => {
  let [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    if (dom) {
      const clickFn = (event: MouseEvent) => {
        event.preventDefault();
        const target = event.currentTarget as HTMLAnchorElement;
        const hash = new URL(target.href || '').hash.replace(/^#/, '');
        const elm = document.getElementById(decodeURIComponent(hash)) as HTMLHeadingElement;
        scrollTop(elm.offsetTop);
        searchParams.set('_id', decodeURIComponent(hash));
        setSearchParams(searchParams);
        if (target.className.indexOf('toc-link') > -1) {
          (target.parentElement?.childNodes as unknown as HTMLAnchorElement[]).forEach((item) => {
            item.classList.remove('active');
          });
          target.classList.add('active');
        }
      };
      const scrollFn = () => {};
      const scrollEndFn = () => {
        const anchor = dom.getElementsByClassName('anchor') as HTMLCollectionOf<HTMLAnchorElement>;
        let hash = '';
        Array.from(anchor).forEach((item, idx) => {
          if (idx === 0) {
            hash = new URL(item.href || '').hash.replace(/^#/, '');
          }
          if (document.documentElement.scrollTop - item.offsetTop > -1) {
            hash = new URL(item.href || '').hash.replace(/^#/, '');
          }
        });
        const tocLink = document.querySelector(`a[href="#${decodeURIComponent(hash)}"].toc-link`) as HTMLAnchorElement;
        if (tocLink) {
          (tocLink.parentElement?.childNodes as unknown as HTMLAnchorElement[]).forEach((item) => {
            item.classList.remove('active');
          });
          tocLink.classList.add('active');
        }
      };
      const callback = () => {
        const anchor = dom.getElementsByClassName('anchor') as HTMLCollectionOf<HTMLAnchorElement>;
        Array.from(anchor).forEach((item) => {
          item.onclick = clickFn;
        });

        const tocAnchor = document
          .getElementById('menu-toc')
          ?.getElementsByClassName('toc-link') as HTMLCollectionOf<HTMLAnchorElement>;
        Array.from(tocAnchor || []).forEach((item) => {
          item.onclick = clickFn;
        });

        const hash = searchParams.get('_id');
        if (hash) {
          const $elm = document.getElementById(hash) as HTMLHeadingElement;
          scrollTop($elm.offsetTop);
        }
        document.documentElement.addEventListener('scroll', scrollFn);
        document.documentElement.addEventListener('scroll', debounce<any>(scrollEndFn, 50));
      };
      // 创建一个观察器实例并传入回调函数
      const observer = new MutationObserver(callback);
      // 以上述配置开始观察目标节点
      observer.observe(dom, { childList: true, subtree: true });

      const callbackToc = (mutationList: MutationRecord[], observer: MutationObserver) => {
        for (const mutation of mutationList) {
          if (mutation.type === 'attributes') {
            const target = mutation.target as HTMLAnchorElement;
            if (
              target &&
              target.className &&
              Array.isArray(target.className) &&
              target.className.indexOf('toc-link') > -1
            ) {
              // console.log('>>>', target);
              const marker = document.querySelector('.menu-marker') as HTMLDivElement;
              marker.style.top = `${target.offsetTop}px`;
            }
          }
        }
      };

      const observerToc = new MutationObserver(callbackToc);
      observerToc.observe(dom, { attributes: true, childList: true, subtree: true });
      return () => {
        // 停止观察
        observer.disconnect();
        // 停止观察
        // observerToc.disconnect();
      };
    }
  }, [dom, searchParams, setSearchParams]);
};
