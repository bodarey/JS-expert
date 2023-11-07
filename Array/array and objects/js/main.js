var btn = document.getElementById("play");

function transform() {

    
    function mySplice(){ // return an existing array without elem 5
      data.splice(5, 1);
      return data;
    }

    function myArray(){ // return new array without id from other array of objects
      var newArray = [];
      var tempArray  = mySplice();
      tempArray.forEach(function(element, i) {
         var obj = {...element};
         delete obj.id;
         newArray.push(obj);
         });
      return newArray;
    }

    function myMap(){ // return new array based on parameters from other array of objects
      var arr = [];
      var obj;
      var name,url,description,date;
      var tempArray = myArray();
      tempArray.map(function(item){
         obj = {};
         obj.name = `${item.name.substring(0, 1).toUpperCase()}${item.name.substring(1).toLowerCase()}`;
         obj.url = `http://${item.url}`;
         obj.description = `${item.description.substring(0, 15)}...`;
         date = new Date(item.date);
         obj.date = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
         obj.params =  `${item.params.status}=>${item.params.progress}`;
         obj.isVisible = item.params.status;
         arr.push(obj);
      });
      return arr.filter(item => item.isVisible == true);
    }

    function Print(){
  
      console.log(myMap());
   
    }

   Print();
    
}



btn.addEventListener("click", transform);
