import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  form : FormGroup
  message: string = '';
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.form = new FormGroup({
      idTechnician: new FormControl('',[Validators.required]),
      startService: new FormControl('',[Validators.required]),
      endService: new FormControl('',[Validators.required]),
      idService: new FormControl('',[Validators.required]),
    })
  }

  report() {
    this.dataService.report(this.form.value).subscribe(
      res => this.message = res.message,
      err => { 
        console.log(err)
        this.message = err.error.message
      }
    )
  }

}
