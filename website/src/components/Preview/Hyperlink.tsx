import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export function debounce<T extends any[]>(func: (...args: T) => void, wait: number) {
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

export const Hyperlink = (props: any) => {
  const { dom } = props;
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
      setTimeout(() => {
        const anchor = dom.getElementsByClassName('anchor') as HTMLCollectionOf<HTMLAnchorElement>;
        console.log('anchor', anchor, dom);
        Array.from(anchor).forEach((item) => {
          item.onclick = clickFn;
        });
        const tocAnchor = dom.getElementsByClassName('toc-link') as HTMLCollectionOf<HTMLAnchorElement>;
        Array.from(tocAnchor).forEach((item) => {
          item.onclick = clickFn;
        });
      }, 900);
    }
  }, [dom, searchParams, setSearchParams]);

  useEffect(() => {
    const scrollEndFn = () => {
      const anchor = dom?.getElementsByClassName('anchor') as HTMLCollectionOf<HTMLAnchorElement>;
      let hash = '';
      Array.from(anchor || []).forEach((item, idx) => {
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
        searchParams.set('_id', decodeURIComponent(hash));
        setSearchParams(searchParams);
      }
      const marker = document.querySelector('.menu-marker') as HTMLDivElement;
      const tocLinkActive = document.querySelector('.toc-link.active') as HTMLDivElement;
      if (tocLinkActive && marker) {
        marker.style.top = `${tocLinkActive.offsetTop}px`;
      }
    };
    const scrollEnd = debounce<any>(scrollEndFn, 50);
    window.addEventListener('scroll', scrollEnd);
    return () => {
      window.removeEventListener('scroll', scrollEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dom]);
  return null;
};
