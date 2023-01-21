import { Component, OnInit ,NgZone} from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';




@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {




  employeeForm: FormGroup;

  constructor(
    public formBiulder:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private employeeService: EmployeeService
  ) {
     this.employeeForm = this.formBiulder.group({
       name: [''],
       age: [''],
     })
  }

  ngOnInit(): void {
  }

  onSubmit():any{
    this.employeeService.addEmployee(this.employeeForm.value)
    .subscribe(()=>{
      console.log('Data added successfully')
      this.ngZone.run(()=> this.router.navigateByUrl('/employee-list'))
    },(err)=>{
      console.log(err)
    })
  }

}
