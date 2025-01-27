export enum ROUTE {
  ANY = '*',
  HOME = '/',
  UPCOMING = '/wykopalisko',
  HITS = '/hity',
  MIKROBLOG = '/mikroblog',
  MY_WYKOP = '/moj',
  LINK = '/link/:id/*',
  ENTRY = '/wpis/:id/*',
  // TAG_LINKS = '/tag/znaleziska/:tag',
  // TAG_ENTRIES = '/tag/wpisy/:tag',
  TAG = '/tag/:tag',
  PROFILE = '/ludzie/:username',
  SETTINGS = '/ustawienia',
  APP_INFO = '/o-aplikacji',
  LOGIN = '/zaloguj',
  LOGIN_CALLBACK = '/zaloguj/callback',
}
