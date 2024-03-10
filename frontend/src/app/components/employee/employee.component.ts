import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { takeUntil, tap } from 'rxjs';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.less'
})
export class EmployeeComponent extends BaseComponent implements OnInit, OnDestroy {

  _employee: Employee;
  get employee(): Employee {
    return this._employee;
  }
  @Input() set employee(value: Employee) {
    this._employee = value;
    this.updateEmployeeForm();
  }

  employeeForm: FormGroup;

  constructor(public activeModal: NgbActiveModal,
              private modalService: NgbModal,
              private employeeService: EmployeeService) {
    super();
    super.ngOnInit();
  };
  
  submit(employeeForm: FormGroup) {
    if(employeeForm.valid && !employeeForm.pristine && this.employee.yearsOfService !== employeeForm.value.yearsOfService) {
      this.employeeService.update(employeeForm.value).pipe(
        takeUntil(this.destroyed$),
        tap ((res: Employee) => {
          if(res) {
            console.log("Updated successfully!");
            this.activeModal.close(super.constants.EVENT_UPDATE_SUCCESS);        
          } else {
            this.activeModal.close(super.constants.EVENT_UPDATE_FAIL);  
          }       
        })
      ).subscribe();
    } else {
      this.activeModal.close(super.constants.EVENT_UPDATE_NA);
    }
  }

  private updateEmployeeForm() {
    this.employeeForm = new Employee(this.employee).toForm();
  }

  get yearControl(): FormControl<number> {
    return this.employeeForm.controls['yearsOfService'] as FormControl<number>;
  }
}
