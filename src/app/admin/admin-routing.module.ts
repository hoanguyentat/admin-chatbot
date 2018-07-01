import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { ReportColumnChartComponent } from "./components/report-column-chart/report-column-chart.component";
import { NgModule } from "@angular/core";

const adminRoutes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: 'shop-management', loadChildren: './shop-management/shop-management.module#ShopManagementModule' },
            // { path: '', redirectTo: 'report', pathMatch: 'prefix' },
            { path: 'report', component: ReportColumnChartComponent },
            // { path: '**', redirectTo: '/report' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {
}
