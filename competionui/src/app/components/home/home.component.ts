import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabel } from 'primeng/floatlabel';
import { DatePickerModule } from 'primeng/datepicker';
import { FluidModule } from 'primeng/fluid';
import { Select } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { InputNumber } from 'primeng/inputnumber';
import { Fluid } from 'primeng/fluid';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    InputTextModule,
    FloatLabel,
    DatePickerModule,
    FluidModule,
    Select,
    ButtonModule,
    InputNumber,
    Fluid,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  Fname: string | undefined;

  Lname: string | undefined;

  date: Date | undefined;

  cities: City[] | undefined;

  selectedgender: City | undefined;

  mobile: number = 9236794856;

  constructor(private serv: HomeService) {}

  ngOnInit() {
    this.cities = [
      { name: 'Men', code: 'M' },
      { name: 'Women', code: 'W' },
      { name: 'Others', code: 'O' },
    ];
  }

  submit() {
    let formInput = {
      firstname: this.Fname,
      lastname: this.Lname,
      dateofbirth: this.date,
      gender: this.selectedgender?.name,
      mobile: this.mobile,
    };
    this.serv.datasaved(formInput).subscribe((res) => {
      console.log(
        '::::::::::::responce::::::::::::::' +
          JSON.stringify(res) +
          ':::::::::::::::::'
      );
    });

    console.log('object' + JSON.stringify(formInput));
  }
}

interface City {
  name: string;
  code: string;
}
