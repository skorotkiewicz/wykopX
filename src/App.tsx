import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LinkPage from 'pages/LinkPage';
import MainPage from 'pages/HomePage';
import EntryPage from 'pages/EntryPage';
import MikroblogPage from 'pages/MikroblogPage';
import HitsPage from 'pages/HitsPage';
import TagPage from 'pages/TagPage';
import ProfilePage from 'pages/ProfilePage';
import UpcomingPage from 'pages/UpcomingPage';
import LoginPage from 'pages/LoginPage';
import LoginCallback from 'pages/LoginCallback';
import SettingsPage from 'pages/SettingsPage';
import AppInfoPage from 'pages/AppInfoPage';
import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import ScrollToTop from 'components/UI/ScrollToTop';
import AuthContext from 'contexts/Auth/AuthContext';
import Layout from 'components/Layout/Layout';
import { ROUTE } from './routes';
import { HitsCategory, MikroblogCategory, UpcomingCategory } from './types';

export const renderRouterRoutes = (isLoggedIn: boolean) => (
  <Routes>
    <Route path={ROUTE.HITS}>
      <Route index element={<HitsPage category={HitsCategory.WEEK} />} />
      {Object.values(HitsCategory).map((category) => (
        <Route path={category} key={category} element={<HitsPage category={category} />}>
          {category === HitsCategory.MONTH && (
            <Route path=':year' element={<HitsPage category={category} />}>
              <Route path=':month' element={<HitsPage category={category} />} />
            </Route>
          )}
          {category === HitsCategory.YEAR && (
            <Route path=':year' element={<HitsPage category={category} />} />
          )}
        </Route>
      ))}
    </Route>
    <Route path={ROUTE.MIKROBLOG}>
      <Route index element={<MikroblogPage category={MikroblogCategory.HOT_12H} />} />
      {Object.values(MikroblogCategory).map((category) => (
        <Route path={category} key={category} element={<MikroblogPage category={category} />} />
      ))}
    </Route>
    <Route path={ROUTE.LINK} element={<LinkPage />} />
    <Route path={ROUTE.ENTRY} element={<EntryPage />} />
    <Route path={ROUTE.TAG} element={<TagPage />} />
    <Route path={ROUTE.PROFILE} element={<ProfilePage />} />
    <Route path={ROUTE.HOME} element={<MainPage />} />
    <Route path={ROUTE.UPCOMING}>
      <Route index element={<UpcomingPage category={UpcomingCategory.NEWEST} />} />
      {Object.values(UpcomingCategory).map((category) => (
        <Route path={category} key={category} element={<UpcomingPage category={category} />} />
      ))}
    </Route>
    <Route path={ROUTE.SETTINGS} element={<SettingsPage />} />
    <Route path={ROUTE.APP_INFO} element={<AppInfoPage />} />
    {!isLoggedIn && <Route path={ROUTE.LOGIN} element={<LoginPage />} />}
    {!isLoggedIn && <Route path={ROUTE.LOGIN_CALLBACK} element={<LoginCallback />} />}
    <Route path={ROUTE.ANY} element={<Navigate to='/' />} />
  </Routes>
);

const App = () => {
  const { authData } = useContext(AuthContext);

  return (
    <ErrorBoundary>
      <ScrollToTop />
      <Layout>{renderRouterRoutes(!!authData?.userkey)}</Layout>
    </ErrorBoundary>
  );
};

export default App;
