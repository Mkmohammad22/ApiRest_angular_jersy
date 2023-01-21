import { Component } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent {


   constructor(private employeeService: EmployeeService) {


  }

  page = 1;
	pageSize = 4;
  Employee:any = [];



  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe( res=>{
      console.log(res)
      this.Employee = res;
    })
  }


  delete(id:any,i:any){
    console.log(id);
    this.employeeService.deleteEmployee(id).subscribe(res => {

      this.Employee.splice(i,1);
    })
  }
}



