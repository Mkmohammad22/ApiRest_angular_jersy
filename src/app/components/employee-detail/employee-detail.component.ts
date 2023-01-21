import { Employee } from './../../service/Employee';
import { Component , OnInit,NgZone} from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { Router ,ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {

  getId:any;
  updateForm: FormGroup;

  page = 1;
	pageSize = 4;
  Employee:any = [];

  constructor(

    public formBiulder: FormBuilder,
    private router: Router,
    private activateRout: ActivatedRoute,
    private ngZone: NgZone,
    private employeeService: EmployeeService

  ){


    this.getId = this.activateRout.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(this.getId).subscribe(res=>{
      console.log(res['Employee'])
      this.updateForm.setValue({
        name: res['Employee']['name'],
        price: res['Employee']['age'],
      });
    });

    this.updateForm = this.formBiulder.group({
      name: [''],
      age: [''],
    })

  }



  ngOnInit(): void {
  }

  onUpdate(): any {
    this.employeeService.updateEmployee(this.getId,this.updateForm.value)
      .subscribe(() => {
        console.log('Data updated successfully')
        this.ngZone.run(() => this.router.navigateByUrl('/books-list'))
      }, (err) => {
        console.log(err)
      })
  }
}

