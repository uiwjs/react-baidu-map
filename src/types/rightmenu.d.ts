/// <reference path="./base.d.ts" />

declare namespace BMap {
  type ContextMenuIcon = string;
  interface MenuItemOptions {
    /**
     * 指定此菜单项的宽度，菜单以最长的菜单项宽度为准
     */
    width: Number;
    /**
     * 指定此菜单项dom的id
     */
    id: string;
    /**
     * 指定此菜单项的icon URL（大小为17px*17px）
     */
    iconUrl: string | ContextMenuIcon;
  }
  class MenuItem {
    constructor(text: string, callback: (point: Point) => void, opts?: MenuItemOptions);
    /**
     * 设置菜单项显示的文本
     */
    setText: (text: string) => void;
    /**
     * 设置菜单项的icon
     */
    setIcon: (iconUrl: string) => void;
    /**
     * 启用菜单项
     */
    enable: () => void;
    /**
     * 禁用菜单项
     */
    disable: () => void;
  }

  /**
   * 此类表示右键菜单。您可以在地图上添加自定义内容的右键菜单。
   */
  class ContextMenu {
    constructor();
    /**
     * 添加菜单项
     */
    addItem: (item: MenuItem) => void;
    /**
     * 返回指定索引位置的菜单项，第一个菜单项的索引为0
     */
    getItem: (index: Number) => MenuItem;
    /**
     * 移除菜单项
     */
    removeItem: (item: MenuItem) => void;
    /**
     * 添加分隔符
     */
    addSeparator: () => void;
    /**
     * 移除指定索引位置的分隔符，第一个分隔符的索引为0
     */
    removeSeparator: (index: number) => void;
    onopen: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void;
    onclose: (event: { type: string; target: any; point: Point; pixel: Pixel }) => void;
  }
}
declare const BMAP_CONTEXT_MENU_ICON_ZOOMIN: string;
declare const BMAP_CONTEXT_MENU_ICON_ZOOMOUT: string;
