import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {
  response: boolean;
  object: any;
  message: string = '';
  form: FormGroup;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.createForm()

  }

  createForm(){
    this.form = new FormGroup({
      idTechnician: new FormControl('',[Validators.required]),
      weekNumber: new FormControl('',[Validators.required])
    })
  }

  async calculate() {
    this.dataService.calculate(this.form.value).subscribe(
      res => { 
        this.message = ''
        this.response = true,
        this.object = res.workingH
      },
      err => {
        this.message = `There's a problem in your Request`
      }
    )
  }
}
