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
          loadChildren: () => import('./offers/offers.module').then( m => m.OffersPageModule),
          children: [
            {
              path: 'locationid',
              loadChildren: () => import('./offers/new/new.module').then( m => m.NewPageModule),
            },
            {
              path: ':locationid',
              loadChildren: () => import('./offers/bookings/bookings.module').then( m => m.BookingsPageModule),
            },
            {
              path: 'offers/:locationid',
              loadChildren: () => import('./offers/edit/edit.module').then( m => m.EditPageModule),
            }
          ]
        },
        {
          path: 'discover',
          loadChildren: () => import('./discover/discover.module').then( m => m.DiscoverPageModule),
          children: [
            {
              path: 'locationid',
              loadChildren: () => import('./discover/details/details.module').then( m => m.DetailsPageModule),
            },

          ]
        },
        {
          path: '',
          redirectTo: '.locations/tabs/discover',
          pathMatch: 'full'
        }
    ],
  },
  {
    path: '',
    redirectTo: '.locations/tabs/discover',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationsPageRoutingModule {}
