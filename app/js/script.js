const searchEngine = () =>{
  const searchbox = document.getElementById("search-bar").value.toUpperCase();
  const storeitems = document.getElementById("book-list");
  const books = document.querySelectorAll(".books");
  const bookname = storeitems.getElementsByTagName("h2");

  for(let i = 0; i < bookname.length; i++){
    let match = books[i].getElementsByTagName("h2")[0];

    if(match){
      let textvalue = match.textContent || match.innerHTML; 

        if(textvalue.toUpperCase().indexOf(searchbox) > -1){
          books[i].style.display = "";
        }
        else{
          books[i].style.display = "none";
        }
    }
  }
}

console.log("putay ka baboy")