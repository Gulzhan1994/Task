const faqs = document.querySelectorAll('.faq')
faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    });
});

$('.tabs__link').on('click', function(e) {
    e.preventDefault();
    $('.tabs__link').removeClass('tabs__link--active');
    $(this).addClass('tabs__link--active');
    $('.programmer-conference__contentbox-tabs').removeClass('programmer-conference__contentbox-tabs--active');
    $($(this).attr('href')).addClass('programmer-conference__contentbox-tabs--active');
});



(function () {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    const nextYear = yyyy + 1;
    const dayMonth = "11/08/";
    const birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;

    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    
    const countDown = new Date(birthday).getTime();

    const x = setInterval(function() {    
  
        const now = new Date().getTime();
        const distance = countDown - now;
  
        document.getElementById("days").innerText = Math.floor(distance / (day)) >= 10 ? Math.floor(distance / (day)) : '0'+Math.floor(distance / (day));
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)) >= 10 ? Math.floor((distance % (day)) / (hour)) : '0'+Math.floor((distance % (day)) / (hour));
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)) >= 10 ? Math.floor((distance % (hour)) / (minute)) : '0'+Math.floor((distance % (hour)) / (minute));
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second) >= 10 ? Math.floor((distance % (minute)) / second) : '0'+Math.floor((distance % (minute)) / second);
  
    }, 0)
}());