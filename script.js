//Part 1

//#1
$(document).ready(()=> console.log('Let’s get ready to party with jQuery!'));

//=============================////=============================////=============================//

//#2
$('article img').addClass('image center')

//=============================////=============================////=============================//

//#3
$('p').last().remove()

//=============================////=============================////=============================//

//#4
$('#title').css('font-size', Math.floor((Math.random()*100)+1))

//=============================////=============================////=============================//

//#5
$("<li>I'm a new li!</li>").appendTo('ol')

//=============================////=============================////=============================//

//#6
$('aside').html("<p>I'm sorry for the list's existence</p>")

//=============================////=============================////=============================//

//#7
//first attempt
// $('.row mb-5').on('change', 'input', function(e){
//     let red = $('input.form-control')
//     let blue = red.next()
//     let green = blue.next()
//     $('body').css('background-color', `rgb(${red.val()}, ${blue.val()}, ${green.val()})`)
// })

$('.form-control').on('keyup input', function(){
    let red = $('input.form-control').eq(0).val()
    let blue = $('input.form-control').eq(1).val()
    let green = $('input.form-control').eq(2).val()
    $('body').css('background-color', `rgb(${red}, ${blue}, ${green})`)
})



//=============================////=============================////=============================//

//#8
$('body').on('click', 'img', function(){
    $(this).remove()
})

//=============================////=============================////=============================//
//Part 2

//building form and inputs
$('<hr>').appendTo('div.container');
$('<div class="movie-app"></div>').appendTo('div.container');
$('<h3>Movie App</h3>').appendTo('div.movie-app');
$('<form></form>').appendTo('div.movie-app');
$('<input type="text" name="title" id="title" placeholder="Title">').appendTo('form');
$('<input type="number" name="rating" id="rating" placeholder="Rating">').appendTo('form');
$('<button class="submit" >Submit</button>').appendTo('form');

//css styling with jQuery
$('div.movie-app').css('text-align', 'center');
$('div form').css('display', 'flex');
$('div form').css('justify-content', 'center');
$('div form').css('flex-direction', 'column');
$('div form').css('flex-direction', 'column');
$('div form').css('width', '400px');
$('div form').css('margin', 'auto');

//upon submition appending to movie app with a remove button
$('div.movie-app').on('submit', function(e){
    e.preventDefault();
    let movie = $('form input').eq(0).val();
    let rating = $('form input').eq(1).val();
    $(`<div>Movie:${movie}, Rating:${rating}
    <button class="delete">Delete</button>
    </div>`).appendTo('div.movie-app');
    $('form input').val('');
})

//event delegation for delete button
$('div.movie-app').on('click', 'button.delete', function(e){
    e.preventDefault();
   $(this).parent().remove();
})

//added attributes to inputs
$('form input').eq(1).attr('min', 0);
$('form input').eq(1).attr('max', 10);
$('form input').eq(0).attr('minlength', 2);

//sorting functionality
$('<button class="sort-title">Sort A-Z</button>').appendTo('div.movie-app');
$('<button class="sort-rating">Sort 1-10</button>').appendTo('div.movie-app');

$('div.movie-app').on('click', 'button.sort-title', function(e){
    e.preventDefault();
    
    let list = $('div.movie-app div');
})

$('div.movie-app').on('click', 'button.sort-rating', function(e){
    e.preventDefault();
        
})

