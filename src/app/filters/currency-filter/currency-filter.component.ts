import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorldService } from "../../world.service";


@Component({
  selector: 'app-currency-filter',
  templateUrl: './currency-filter.component.html',
  styleUrls: ['./currency-filter.component.css']
})
export class CurrencyFilterComponent implements OnInit {

  currency: string;
  listByCurrency;

  constructor(private _route: ActivatedRoute, private router: Router, public worldService: WorldService) { }

  ngOnInit() {
    this.currency = this._route.snapshot.paramMap.get('currency');

    this.worldService.getCountriesListByCurrency(this.currency).subscribe(

      data => {
        this.listByCurrency = data;
      },
      error => {
        console.log(error.errorMessage)
      }
    )

  }

}
