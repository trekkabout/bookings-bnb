import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationsPage } from './locations.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: LocationsPage,
    children: [
        {
          path: 'offers',
          children: [
            {
              path: '',
              loadChildren: () => import('./offers/offers.module').then(m => m.OffersPageModule)
            },
            {
              path: 'new',
              loadChildren: () => import('./offers/new/new.module').then( m => m.NewPageModule),
            },
            {
              path: 'edit/:locationid',
              loadChildren: () => import('./offers/edit/edit.module').then( m => m.EditPageModule),
            },
            {
              path: ':locationid',
              loadChildren: () => import('./offers/bookings/bookings.module').then( m => m.BookingsPageModule),
            },

          ]
        },
        {
          path: 'discover',
          children: [
            {
              path: '',
              loadChildren: () => import('./discover/discover.module').then(m => m.DiscoverPageModule)
            },
            {
              path: ':locationId',
              loadChildren: () => import('./discover/details/details.module').then( m => m.DetailsPageModule),
            },

          ]
        },
        {
          path: '',
          redirectTo: '/locations/tabs/discover',
          pathMatch: 'full'
        }
    ],
  },
  {
    path: '',
    redirectTo: '/locations/tabs/discover',
    pathMatch: 'full'
  }



  // {
  //   path: 'tabs',
  //   component: LocationsPage,
  //   children: [
  //     {
  //       path: 'discover',
  //       children: [
  //         {
  //           path: '',
  //           loadChildren: () => import('./discover/discover.module').then(m => m.DiscoverPageModule)
  //         },
  //         {
  //           path: ':locationId',
  //           loadChildren: () => import('./discover/details/details.module').then(m => m.DetailsPageModule)
  //         }
  //       ]
  //     },
  //     {
  //       path: 'offers',
  //       children: [
          // {
          //   path: '',
          //   loadChildren: () => import('./offers/offers.module').then(m => m.OffersPageModule)
          // },
  //         {
  //           path: 'new',
  //           loadChildren: () => import('./offers/new/new.module').then(m => m.NewPageModule)
  //         },
  //         {
  //           path: 'edit/:locationId',
  //           loadChildren: () => import('./offers/edit/edit.module').then(m => m.EditPageModule)
  //         },
  //         {
  //           path: ':locationId',
  //           loadChildren: () => import('./offers/bookings/bookings.module').then(m => m.BookingsPageModule)
  //         }
  //       ]
  //     },
  //     {
  //       path: '',
  //       redirectTo: '/locations/tabs/discover',
  //       pathMatch: 'full'
  //     }
  //   ]
  // },
  // {
  //   path: '',
  //   redirectTo: '/locations/tabs/discover',
  //   pathMatch: 'full'
  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationsPageRoutingModule {}
