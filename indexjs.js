(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';


    document.querySelector("html").addEventListener("click",function(){
        header.style.color="blue";
    });
})();


//this above function complete works based on the closure here
//the first  thought will raise when we use header variable from one scope to the another 
//scope but that works perfectly based on the closure concept here 