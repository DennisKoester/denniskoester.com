import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { ExtraOptions } from '@angular/router';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'imprint', component: ImprintComponent },
];

// @NgModule({
//     imports: [
//         RouterModule.forRoot(routes, {
//             scrollPositionRestoration: 'enabled',
//             anchorScrolling: 'enabled',
//             scrollOffset: [0, 130],
//         }),
//     ],
//     exports: [RouterModule],
// })
// export class AppRoutingModule {}

const config = {
    /* instead of use extraOptions for Router */
    onSameUrlNavigation:
        'reload' /**fix to rescroll to same anchor url after scrolling */,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 130],
};

@NgModule({
    imports: [RouterModule.forRoot(routes, config as ExtraOptions)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
