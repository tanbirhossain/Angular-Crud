import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

import { from } from 'rxjs';
import { EmployeeAddComponent } from './Components/employees/employee-add/employee-add.component';
import { EmployeeListComponent } from './Components/employees/employee-list/employee-list.component';

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
