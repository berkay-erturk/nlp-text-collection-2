import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})

export class MainpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    

  }


  data:any = {
    egitimDuzeyi:"ilkokulmezunu",
    text:""
  }

  dropdownChanged(e:any){
    this.data.egitimDuzeyi = e.value
    console.log(this.data.egitimDuzeyi)
  }

  changeTextData(e:any){
    this.data.text = e.target.value
    console.log(this.data.text)
  }

  preventBackspace (e:any) {
   var evt = e || window.event;
   if (evt) {
     var keyCode = evt.charCode || evt.keyCode;
     if (keyCode === 8 || keyCode === 46 || keyCode === 17 && keyCode === 90) {
       if (evt.preventDefault) {
         evt.preventDefault();
        } else {
          evt.returnValue = false;
        }
      }
    }

   
  }

  submit(){
    download("hello.txt",this.data.egitimDuzeyi + ' - ' + this.data.text);
  }


}



function download(filename:any, text:any) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

// Start file download.
