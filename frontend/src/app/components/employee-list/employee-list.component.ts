import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Observable, startWith, switchMap } from 'rxjs';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { BaseComponent } from '../base.component';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.less',
})
export class EmployeeListComponent extends BaseComponent implements OnInit, OnDestroy {

  employees$: Observable<Employee[]>;
  updateSubject = new BehaviorSubject(true);

  private modalService: NgbModal;
  private modalRef: NgbModalRef

  constructor(private employeeService: EmployeeService) {
    super();
    super.ngOnInit();
    this.modalService = inject(NgbModal);
  }

  override bindObservables() {
    this.employees$ = this.updateSubject.asObservable().pipe(
      startWith(true),
      switchMap(() => this.employeeService.list())
    );
  }

  openDialog(employee: Employee) {
    this.modalRef = this.modalService.open(EmployeeComponent, { backdrop: 'static', keyboard: false, scrollable: true});
    this.modalRef.componentInstance.employee = employee;
    this.modalRef.closed.subscribe(res => {
      if(res = 'update') {
        this.updateSubject.next(true);
      }
    });
  }
}
