function toggle(){
    var links = document.getElementById('links');
    links.classList.toggle('active');

    var body = document.getElementById('body');
    body.classList.toggle('active');
    
    window.scrollTo({
        top:0,
    })
}