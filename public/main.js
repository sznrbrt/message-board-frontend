'use strict';

$(function() {
  $('#addPost').on('click', addPost);
});

function addPost() {
  var newPost = {};
  newPost.name = '@' + $('#input-name').val();
  newPost.url = $('#input-url').val() || "http://placehold.it/100x100";
  newPost.post = $('#post').val()
  newPost.addedT = moment().format('MMMM Do YYYY, h:mm a').split(',');
  newPost.day = newPost.addedT[0] + ', ';
  newPost.time = newPost.addedT[1];

  if(newPost.name == '@') {
    $('#name').addClass('has-error');
    return;
  }

  if(newPost.post == '') {
    $('#post').text('This will be an empty post. Are you sure?');
    return;
  }
  if(newPost.post === 'This will be an empty post. Are you sure?') {
    newPost.post = "";
  }

  var $postItem = $('.template').clone();
  $('.template').removeClass('template');
  $postItem.find('.name').text(newPost.name);
  $postItem.find('.postImage').attr('src', newPost.url);
  $postItem.find('.postBody').text(newPost.post);
  $postItem.find('.day').text(newPost.day);
  $postItem.find('.time').text(newPost.time);
  $postItem.addClass('template animated slideInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $($postItem).removeClass('animated ' + 'slideInRight');
        });

  $('.posts').append($postItem);
  $('.modal').modal('hide')
  $('.newPost').addClass('animated rubberBand').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $('.newPost').removeClass('animated ' + 'rubberBand');
        });
  $('.has-error').removeClass('has-error');
}
