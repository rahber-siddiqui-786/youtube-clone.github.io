// alert("linked")

const search=document.getElementById("search");

function fn(){
    let input=document.getElementById("input").value;
    window.location.href=`https://www.youtube.com/results?search_query=${input}`
}