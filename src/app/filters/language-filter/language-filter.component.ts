import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorldService } from "../../world.service";

@Component({
  selector: 'app-language-filter',
  templateUrl: './language-filter.component.html',
  styleUrls: ['./language-filter.component.css']
})
export class LanguageFilterComponent implements OnInit {

  language: string;
  listByLanguage;

  constructor(private _route: ActivatedRoute, private router: Router, public worldService: WorldService) { }

  ngOnInit() {
    this.language = this._route.snapshot.paramMap.get('language');

    this.worldService.getCountriesListByLanguage(this.language).subscribe(

      data => {
        this.listByLanguage = data;
      },
      error => {
        console.log(error.errorMessage)
      }
    )
  }

}
