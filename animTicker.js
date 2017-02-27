/* copyright * 2016 * Nadeem Elahi * nadeem.elahi@gmail.com */
"use strict";


var T = new function(){ //singleton
   this.id = "T -singleton";
   var items = [], len;
   this.add=function(item){
      items.push(item);len=items.length;
      //console.log("item:",items[len-1],"added to T");
      //console.log(items);
      //console.log("item added to T, calling tick(0)");
      //items[len-1].tick(0); //MOVED TO C obj
   };
   var rmIdx;
   this.rm=function(item){
      rmIdx=items.indexOf(item);
      items.splice(rmIdx,1);
      len=items.length;
      //console.log("T.rm'd");
   };
   var dt,ct,lt=Date.now();
   var raf = window.requestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(cb){setTimeout(cb,30);};
   var i,t=0;
   function ticker(){
      ct=Date.now();
      dt=ct-lt;
      t += dt;
      if(t>30){
	 for(i=0;i<len;i++){
	    items[i].tick(t);
	 }
	 t=0;
      } 
      lt=ct;
      raf(ticker);
   } 
   ticker();
};
