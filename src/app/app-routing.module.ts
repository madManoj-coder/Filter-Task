import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/components/home/home.component";
import { FairsDashboardComponent } from "./shared/components/fairs-dashboard/fairs-dashboard.component";
import { FairsDetailsComponent } from "./shared/components/fairs-details/fairs-details.component";

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'fairs',
        component: FairsDashboardComponent,
        children: [
            {
                path: ':fairsId',
                component: FairsDetailsComponent
            }
        ]
    }
]


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppModuleRouting {

}