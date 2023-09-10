var section = document.querySelectorAll('section');
var header = document.querySelectorAll('header nav a');

window.onscroll = () => {
  section.forEach(sec => {
    let top  = window.screenY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top>=offset && top < offset + height){
      header.forEach(links => {
        links.classList.remove('active');
        document.querySelectorAll('header nav a[href*=' + id +']').classList.add('active');
      });
    };
  });
  let barplace = document.getElementById('home1');
  barplace.classList.toggle('sticky', window.scrollY > 100);
};

//block of the page......
var bodyplace = document.getElementById('body');
var falseplace = document.getElementById('false');
var pagerespond = document.getElementById('maxwidth');
var clickbtn = document.getElementById('click');
 clickbtn.addEventListener('click', () => {
  falseplace.style.display = "block";
  pagerespond.style.display = "block";
 clickbtn.replaceWith(falseplace);
})
falseplace.addEventListener('click', (e) => {
  e.preventDefault();
  pagerespond.style.display = "none";
 falseplace.replaceWith(clickbtn);
})

// send email script.....
var button = document.getElementById('button');
    button.addEventListener('click',function(e){
    e.preventDefault();
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var name = document.getElementById('name').value;
    var body = name + message ;
    Email.send({
      SecureToken : "132846e6-697e-485e-bbd9-3cbdbbf63588",
      To : 'mawududzi4@gmail.com',
      From : email,
      Subject : "This is the subject " + name,
      Body : body
  }).then(
    message => alert(message)
  );
})
