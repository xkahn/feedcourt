function moreorless(e) {
    if (e.innerHTML == "less") {
        e.parentElement.parentElement.style.height = "30em";
        e.innerHTML = "more";
    }else {
        e.parentElement.parentElement.style.height = "auto";
        e.innerHTML = "less";
    }
    return false;
}
function pagelinks(){
    var morelinks = document.getElementsByClassName('more')
    for (var i = 0 ; i < morelinks.length ; i++){
        console.log("making links");
        l = morelinks[i];
        l.addEventListener('click',moreorless);
    }
    return false;
}
function convertUTCDateToLocalDate(date) {
        var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);

        var offset = date.getTimezoneOffset() / 60;
        var hours = date.getHours();
        newDate.setHours(hours - offset);
        return newDate;   
}
function utctolocal(){
    var lastup =  document.getElementById("utcupdate").innerHTML;
    var offsetlastup = convertUTCDateToLocalDate(new Date(lastup));
    document.getElementById("utcupdate").innerHTML = offsetlastup.toString().replace(/GMT.[0-9]*/g,"");

}
function loadroutine(){
    utctolocal();
    // pagelinks();
}
