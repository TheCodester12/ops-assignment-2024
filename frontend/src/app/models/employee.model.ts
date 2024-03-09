import { FormControl, UntypedFormGroup } from '@angular/forms';

export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  yearsOfService: number;

  constructor(init?: Partial<Employee>) {
    Object.assign(this, init);
  }

  toForm() {
    return new UntypedFormGroup({
      id: new FormControl<number>(this.id),
      firstName: new FormControl<string>(this.firstName),
      lastName: new FormControl<string>(this.lastName),
      yearsOfService: new FormControl<number>(this.yearsOfService),
    });
  }
}
