$(document).ready(function() {
    // 'Are you here for a quick solution or would you really like to know Perl? If the former, go ahed find the content you need!<p>If you would like to know more, let me suggest you pick up one of the eBooks I wrote: The <a href="https://leanpub.com/perl-maven/c/pmtop-2018-04">Perl Maven eBook</a>, the <a href="https://leanpub.com/markua-parser-in-perl5">TDD case study in Perl</a>, and the <a href="https://leanpub.com/dancer-spa/">Dancer SPA</a>.'
    var msg = 'Are you serious about Perl? Check out my <a href="https://leanpub.com/perl-maven/c/pmtop-2018-04">Beginner Perl Maven book</a>. I have written it for you!'

    $('#top-poster').html(msg);
    $('#top-poster').show();
    $('#top-poster').css('font-size', '30px');
})
