import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { ExtraOptions } from '@angular/router';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'imprint', component: ImprintComponent },
];

const config = {
    onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'enabled',
    useHash: false,
    anchorScrolling: 'enabled',
    scrollBehavior: 'smooth',
};

@NgModule({
    imports: [RouterModule.forRoot(routes, config as ExtraOptions)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
