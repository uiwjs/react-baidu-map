import { Element, RootContent } from 'hast';
import { getCodeString } from 'rehype-rewrite';

export const titleNum = (tagName = '') => Number(tagName.replace(/^h/, ''));
export function getTocTree(arr: RootContent[] = [], result: Element[] = []): Element {
  let n = 0;
  while (n < arr.length) {
    const toc = arr[n];
    if (toc && toc.type === 'element' && /^h[1-6]/.test(toc.tagName)) {
      const titleNum = Number(toc.tagName.replace(/^h/, ''));
      result.push({
        ...toc,
        tagName: 'a',
        properties: { class: `toc-link level${titleNum}`, href: `#${toc.properties?.id}` },
        children: [
          {
            type: 'text',
            value: getCodeString(toc.children),
          },
        ],
      });
    }
    n++;
  }
  return {
    type: 'element',
    tagName: 'nav',
    properties: {
      class: 'menu-toc',
      id: 'menu-toc',
    },
    children: [
      {
        type: 'element',
        tagName: 'aside',
        properties: {
          class: 'menu-modal',
          'data-top': '12px',
        },
        children: [
          {
            type: 'element',
            tagName: 'div',
            properties: {
              class: 'menu-marker',
            },
            children: [],
          },
          ...result,
        ],
      },
    ],
  };
}
