/**
 * @z-os/ui v4.2.0 - zOS UI Components
 */

// Window
export { default as ZWindow } from './components/window/ZWindow';
export { default as WindowTitleBar } from './components/window/WindowTitleBar';
export { default as WindowResizeHandle } from './components/window/WindowResizeHandle';

// Dock
export { default as ZDock } from './components/dock/ZDock';
export { default as DockItem } from './components/dock/DockItem';
export { default as TrashItem } from './components/dock/TrashItem';
export * from './components/dock/icons';

// Hooks
export { useWindowManager, ALL_APPS } from './hooks/useWindowManager';
export { useDesktopSettings } from './hooks/useDesktopSettings';
export { useKeyboardShortcuts, formatShortcut } from './hooks/useKeyboardShortcuts';
export { useIsMobile } from './hooks/use-mobile';
