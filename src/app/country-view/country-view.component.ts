import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { WorldService } from "../world.service";

@Component({
  selector: 'app-country-view',
  templateUrl: './country-view.component.html',
  styleUrls: ['./country-view.component.css']
})
export class CountryViewComponent implements OnInit {

  countryName: string;
  countryInfo;


  constructor(private _route: ActivatedRoute, private router: Router, private worldService: WorldService) { }

  ngOnInit() {
    this.countryName = this._route.snapshot.paramMap.get('countryName');

    this.worldService.getCountry(this.countryName).subscribe(

      data => {
        this.countryInfo = data;
      },
      error => {
        console.log(error.errorMessage)
      }
    )

  }

  getUrl(info) {
    return "url" + "(" + info.flag + ")"
  }

}
