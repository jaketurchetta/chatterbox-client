var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(message) {
    $('#chats').prepend('<div>' + message + '</div>');

  }





};