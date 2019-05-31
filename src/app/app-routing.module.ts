import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EmployeeAddComponent } from './employees/employee-add/employee-add.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { from } from 'rxjs';

const routes: Routes = [
    {
      path: "employee/add",
      component: EmployeeAddComponent
    },
    {
      path: "employee/list",
      component: EmployeeListComponent
    },
    {
      path: "",
      redirectTo: "employee/add",
      pathMatch: "full"
    },
    {
      path: "**",
      component: PageNotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
