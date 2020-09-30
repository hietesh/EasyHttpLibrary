function Easyhttp(){
    this.http = new XMLHttpRequest();   
 }
 
 // Get 
 Easyhttp.prototype.get = function(url,callback){
    const self = this;
    this.http.open('GET',url,true);       
    this.http.onload = function() {
        if(self.http.status === 200){
          callback(null,self.http.responseText); 
        }
        else{
            callback(`Error${self.http.status}`);  
        }
    }
    this.http.send();
 }
 // post
 Easyhttp.prototype.post = function(url,data,callback){
     this.http.open('POST',url,true);
     const self = this;
     this.http.setRequestHeader('Content-type' , 'application/json');
     this.http.onload = function(){
        callback(null,self.http.responseText);  
     }
     this.http.send(JSON.stringify(data));
 }
 // put | update 
 Easyhttp.prototype.put = function(url,data,callback){
    this.http.open('PUT',url,true);
     const self = this;
     this.http.setRequestHeader('Content-type','application/json');
     this.http.onload = function(){
        callback(null,self.http.responseText);  
     }
     this.http.send(JSON.stringify(data));
 }
 //  delete
 Easyhttp.prototype.delete = function(url,callback){
    const self = this;
    this.http.open('DELETE',url,true);       
    this.http.onload = function() {
        if(self.http.status === 200){
          callback(null,self.http.responseText); 
        }
        else{
            callback(`Error${self.http.status}`);  
        }
    }
    this.http.send();
 }
