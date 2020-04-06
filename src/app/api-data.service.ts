import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiDataService {
  constructor(private http: HttpClient) {}

  url =
    "https://newsapi.org/v2/everything?q=reactjs&apiKey=363d26dd3d664d199ca63adc371e22aa&pageSize=10&page=1&sortBy=publishedAt";

  getData(): Observable<any> {
    return this.http.get(this.url);
  }
}
