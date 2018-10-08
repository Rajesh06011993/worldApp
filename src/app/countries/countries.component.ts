import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { WorldService } from "../world.service";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  
  regionName :string;
  coutryList;
  constructor(private _route:ActivatedRoute, private router:Router, public worldService: WorldService) { }

  ngOnInit() {
   this.regionName = this._route.snapshot.paramMap.get('regionName');
   
    this.worldService.getCountriesList(this.regionName).subscribe(
    
    data =>{
      this.coutryList = data;
    },
    error =>{
     console.log(error.errorMessage)
    }
   )

  }

}
