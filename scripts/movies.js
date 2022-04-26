// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
var id;

async function search(){
    try{
        var query = document.getElementById("search").value;

        var res = await fetch(`https://www.omdbapi.com/?apikey=d9abad7f&s=${query}`);
        var data= await res.json();
        console.log(data)
        var movies = data.Search;
        return movies;
    }
    catch(err){
        console.log("err:",err);
    }
}
function append(data)
{
    document.getElementById("movies").innerHTML=null;
    data.map(function(el){
          
        var box = document.createElement("div");

        var title = document.createElement("h4");
          title.innerText = el.Title ;

        var img = document.createElement("img")
        img.src = el.Poster;

        var button =document.createElement("button")
          button.innerText = "Book Now";
          
          button.addEventListener("click",function(){
                movClick(el)
          });

         box.append(img,title,button);
        document.getElementById("movies").append(box)
    })
}
async function main(){
    var data = await search();
    if(data==undefined){
        return false;
    }
    append(data)
}
function debo(func,delay){
    if(id){
        clearTimeout();
    }
    id= setTimeout(function(){
        func();
    },delay)
}
function movClick(el){
    localStorage.setItem("movie",JSON.stringify(el));
    window.location.href="checkout.html"
}




