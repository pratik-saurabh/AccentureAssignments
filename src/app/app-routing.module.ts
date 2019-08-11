import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DifferenceComponent } from './difference/difference.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { FindKeysComponent } from './find-keys/find-keys.component';
import { ReverseStringComponent } from './reverse-string/reverse-string.component';
import { DuplicateStringComponent } from './duplicate-string/duplicate-string.component';

const routes: Routes = [
  { path: "difference", component: DifferenceComponent },
  { path: "assignments", component: AssignmentsComponent },
  { path: "findKeys", component: FindKeysComponent },
  { path: "reverseString", component: ReverseStringComponent },
  { path: "duplicateString", component: DuplicateStringComponent },
  { path: "", redirectTo: "/assignments", pathMatch: "full" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
