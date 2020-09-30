const http = new Easyhttp();
http.get('https://jsonplaceholder.typicode.com/posts',function(err,response){
    if(err){
       console.log("Error")
    }
    else{
       console.log(response);    
    }
});

let data = {
    title : "This is the test Post",
    body  : "This is the first post is posted"
}
http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,response){
   console.log(response);
});

data = {
    title : "This is the test Post",
    body  : "This is the first post is posted"
}
http.put('https://jsonplaceholder.typicode.com/posts/2',data,function(err,response){
   console.log(response);
});

http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err,response){
    if(err){
       console.log("Error : "+err);
    }
    else{
       console.log(response);    
    }
});