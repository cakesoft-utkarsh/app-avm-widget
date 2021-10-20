import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-Shopprop-AVM',
  template: `
  <div id="rprAvmWidget" class="d-flex justify-content-center">
  </div>
  <input type='hidden' id="widgetAddress" value={{rvmAddress}} />
  <input type='hidden' id="widgetKey" value={{rvmWidgetKey}} />
  `,
  styles: [
  ]
})
export class ShoppropAVMComponent implements OnInit {

  @Input() rvmAddress: string | undefined;
  @Input() rvmWidgetKey: string | undefined; 
  scriptLoaded:Boolean = false;
  isShow:Boolean = true;
  constructor() { 
  }

  ngOnInit(): void {
  }
  
 
  public loadScript() {        
    let script = document.createElement('script');
    script.src = 'assets/widget.js';
    script.async = true;
    script.defer = true;
    document.getElementsByTagName('body')[0].appendChild(script);   
      
  }
  
  
  ngAfterViewChecked(){
   let visitId = document.getElementById("rprAvmWidget");
   console.log(this.rvmAddress,visitId);
   
   if(visitId&&!this.scriptLoaded)
   {
     this.scriptLoaded = true
     this.loadScript();
   }
  
  }

}
