import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';
import {RegistreComponent} from '../registre/registre.component';
import {BufferDealsComponent} from './buffer-deals/buffer-deals.component';
import {AuthGuardService} from '../guard/auth-guard.service';
import {AdministrationComponent} from './administration/administration.component';
import {ReferenceDataComponent} from './reference-data/reference-data.component';

const routers: Routes = [
    {path: 'login', component: LoginComponent},
    {path: '', component: LoginComponent},
    {path: 'registre', component: RegistreComponent, canActivate: [AuthGuardService]},
    {path: 'referenceData', component: ReferenceDataComponent, canActivate: [AuthGuardService]},
    {path: 'buffer-deal', component: BufferDealsComponent, canActivate: [AuthGuardService]},
    {path: 'administration', component: AdministrationComponent, canActivate: [AuthGuardService]}
];

@NgModule({
    imports:      [RouterModule.forRoot(routers)],
    exports:      [RouterModule]
})
export class AppRouter {}
