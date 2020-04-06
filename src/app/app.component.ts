import { Component, OnInit } from "@angular/core";
import { ApiDataService } from "src/app/api-data.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title: string;

  image: string;
  dataFromApi: any;
  large: boolean = true;
  publishedAt: any;
  orderedProducts;
  invisible: boolean = true;
  visible: boolean = false;
  queryString: string = "";

  constructor(private _data: ApiDataService) {}
  getData() {
    this._data.getData().subscribe((response) => {
      this.dataFromApi = response["articles"].map((res) => res);
    });
  }
  ngOnInit() {
    this.getData();
  }
  // List View
  listView() {
    this.large = false;
  }
  // Grid View
  gridView() {
    this.large = true;
  }
  //sorting by date
  sortByLowtoHigh(publishedAt: any) {
    this.sortByLow("publishedAt");
    this.visible = true;
    this.invisible = false;
  }
  sortByLow(field: string) {
    this.dataFromApi.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    this.orderedProducts = this.dataFromApi;
  }
  sortByHigtoLow(publishedAt: any) {
    this.sortByHigh("publishedAt");
    this.visible = false;
    this.invisible = true;
  }
  sortByHigh(field: string) {
    this.dataFromApi.sort((a: any, b: any) => {
      if (a[field] > b[field]) {
        return -1;
      } else if (a[field] < b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    this.orderedProducts = this.dataFromApi;
  }
  //search close
  close() {
    this.queryString = "";
  }
}
