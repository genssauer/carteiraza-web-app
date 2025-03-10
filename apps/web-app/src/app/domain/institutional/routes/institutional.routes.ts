import { Route } from '@angular/router';

export const INSTITUTIONAL_ROUTES: Route[] = [
  {
    path: 'contact',
    loadComponent: () => import('../pages/contact/contact.page').then(m => m.ContactPage),
  },
  {
    path: 'privacy-policy',
    loadComponent: () => import('../pages/privacy-policy/privacy-policy.page').then(m => m.PrivacyPolicyPage),
  },
  {
    path: 'support',
    loadComponent: () => import('../pages/support/support.page').then(m => m.SupportPage),
  },
  {
    path: 'terms-of-use',
    loadComponent: () => import('../pages/terms-of-use/terms-of-use.page').then(m => m.TermsOfUsePage),
  },
];
