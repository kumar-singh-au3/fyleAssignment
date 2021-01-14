const categoryButton=()=>{
    var x = document.querySelector("#category-button");
    if(x.innerHTML.trim()=="See All Categories")
    {
        x.innerHTML="Hide Categories"
        return
    }
    x.innerHTML="See All Categories"
    return
}