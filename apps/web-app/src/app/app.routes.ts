import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./core/layout/base/base.layout').then(m => m.BaseLayout),
    children: [
      {
        path: '',
        loadChildren: () => import('./domain/institutional/routes/institutional.routes').then(m => m.INSTITUTIONAL_ROUTES),
      },
    ],
  },
];
