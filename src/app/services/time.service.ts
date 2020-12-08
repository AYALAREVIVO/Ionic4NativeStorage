import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HebrewCalendar, HDate, Location, Event, Zmanim } from '@hebcal/core';

@Injectable({
  providedIn: 'root'
})
export class TimeService {
  zmanim;
  startMashiv;
  endMashiv;
  startBarechalino;
  endBarechalino;
  date; bigDate;
  url = "https://www.hebcal.com/converter?cfg=json&";
  urlBig = "https://www.hebcal.com/hebcal?v=1&cfg=json&year=now&month=11&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&nx=on&ss=on&mf=on&c=on&geonameid=281184&m=50&s=on&lg=h&tzid=%E2%88%922052+05528";
  month = ["Tishrei", "Cheshvan", "Kislev", "Tevet", "Shvat","Adar", "Adar I", "Adar II", "Nisan", "Iyyar", "Sivan", "Tamuz", "Av", "Elul"];

  // new Date().getFullYear(),new Date().getMonth()+1,new Date().getDate()
  constructor(private http: HttpClient) {
    this.zmanim = new Zmanim(new Date(), 31.59, 35.03);
    this.convertGtoH(2021,2,25).subscribe(countries => {
      this.date = countries; this.date.hm = this.search(this.date.hm);
      this.convertHtoG(this.date.hy, this.month[0], "22").subscribe(countries => { this.startMashiv = countries; this.startMashiv.hm = this.search(this.startMashiv.hm); console.log(this.startMashiv)});
      this.convertHtoG(this.date.hy, this.month[8], "15").subscribe(countries => { this.endMashiv = countries; this.endMashiv.hm = this.search(this.endMashiv.hm); });
      this.convertHtoG(this.date.hy, this.month[1], "7").subscribe(countries => { this.startBarechalino = countries; this.startBarechalino.hm = this.search(this.startBarechalino.hm); });
      this.convertHtoG(this.date.hy, this.month[8], "15").subscribe(countries => { this.endBarechalino = countries; this.endBarechalino.hm = this.search(this.endBarechalino.hm); });
    });
  }

  setBigDate() {
    return this.http.get<any>(this.urlBig);
    // .subscribe(countries => {  this.bigDate=countries;});
  }
  convertGtoH(year, month, day) {
    return this.http.get<any>(this.url + "&gy=" + year + "&gm=" + month + "&gd=" + day + "&g2h=1");
    // subscribe(countries => {  this.date=countries;});
  }
  convertHtoG(year, month, day) {
    // if(year=="")
    // {year="5781";}
    return this.http.get<any>(this.url + "&hy=" + year + "&hm=" + month + "&hd=" + day + "&h2g=1");
    // subscribe(countries => {  this.date=countries;});
  }
  search(item: string) {

    for (let index = 0; index < this.month.length; index++) {
      if (this.month[index] == item)
        return index;
    }
    return -1;
  }
}



