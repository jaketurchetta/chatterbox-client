var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(eachMessage) {
    $('#chats').prepend('<div id = "messageBox">' + '<div class = "username">' + eachMessage["username"] + '</div>' + eachMessage["text"] + eachMessage["roomname"] + eachMessage["createdAt"]+ '</div>');
  }

};