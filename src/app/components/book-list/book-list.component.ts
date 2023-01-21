import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  page = 1;
	pageSize = 4;
  Books:any = [];

  constructor(private crudService: CrudService) {

    this.refreshCountries();
  }

  refreshCountries(){


  }
  ngOnInit(): void {
    this.crudService.getBooks().subscribe( res=>{
      console.log(res)
      this.Books = res;
    })
  }

  delete(id:any,i:any){
    console.log(id);
    this.crudService.deleteBook(id).subscribe(res => {

      this.Books.splice(i,1);
    })
  }

}
