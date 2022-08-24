import type { AppState } from '@/store/modules/app/types';

const config: AppState = {
  theme: 'light',
  colorWeak: false,
  navbar: true,
  menu: true,
  hideMenu: false,
  menuCollapse: false,
  footer: true,
  themeColor: '#165DFF',
  menuWidth: 220,
  globalSettings: false,
  device: 'desktop',
  tabBar: false,
  menuFromServer: false,
  serverMenu: [],
};

export default config;
