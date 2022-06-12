import Admin from './pages/admin';
import Auth from './pages/auth';
import Main from './pages/main';
import Subscriptions from './pages/subscriptions';
import Templates from './pages/templates ';
import Support from './pages/support';
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  REGISTRATION_ROUTE,
  SUBSCRIPTIONS_ROUTE,
  SUPPORT_ROUTE,
  TEMPLATES_ROUTE,
} from './utils/consts';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: SUBSCRIPTIONS_ROUTE,
    Component: Subscriptions,
  },
  {
    path: TEMPLATES_ROUTE,
    Component: Templates,
  },
  {
    path: SUPPORT_ROUTE,
    Component: Support,
  },
];
