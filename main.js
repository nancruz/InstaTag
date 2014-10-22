var url = 'https://api.instagram.com/v1/tags/"TAG"/media/recent?access_token="ACCESS_TOKEN"';
var num_photos = '5'; //Number of recent photos to be shown

$(document).ready(function(){
    app.init();	
});
var timer;
var app = {
    currentPhoto: 0,
    timer: 5,
    photos: new Array(),
    init: function(){
        app.getPhotos();
    },

    getPhotos: function(){
        $.get(url,{count:num_photos}).success(function(data){
            for(i = 0; i<data.data.length; i++){
                app.photos.push(data.data[i].id);
            }
            app.updatePhotosElem(data);
            app.animate();
        });
    },

    updatePhotosElem: function(data){
        var source = $('#photos-list').html();
        var template = Handlebars.compile(source);
	    $('#content').html(template(data)); 
    },
    
    animate: function(){
        var post = $('#' + app.photos[app.currentPhoto]);
        post.css('top','-2000px');
        post.fadeToggle();
        post.animate({top: "+=2150"}, 500);
        app.currentPhoto++;
        if(app.currentPhoto<app.photos.length)
            setTimeout(function(){
                post.animate({top: "+=2000px"},500);
                post.fadeToggle();
                app.animate();
            },5000);
        else{
            setTimeout(function(){
                post.fadeToggle(); 
                app.getPhotos();
            },5000);
        }
    }
}
