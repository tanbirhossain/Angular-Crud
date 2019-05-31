import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { EmployeeAddComponent } from './Components/employees/employee-add/employee-add.component';
import { EmployeeListComponent } from './Components/employees/employee-list/employee-list.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

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
