var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    curl -X GET \
    -H "X-Parse-Application-Id: 72b8e073a4abde10221ce95f38ed1c63bd7f3d6b" \
    -H "X-Parse-REST-API-Key: cf1ce23a61e2a40702c347b7dc1e0af8c28f6c7a" \
    http://parse.sfo.hackreactor.com/chatterbox/classes/messages
   },

   https://72b8e073a4abde10221ce95f38ed1c63bd7f3d6b:javascript-key=cf1ce23a61e2a40702c347b7dc1e0af8c28f6c7a@parse.sfo.hackreactor.com


  render: function() {
    MessagesView.$chats.html('');
    messages
    .filter(message => Rooms.isSelected(message.roomname))
    .each(message => MessagesView.renderMessage(message));
  }

  renderMessage: function(message) {
    var $message = MessageView.render(message);
    MessagesView.$chats.prepend($message);
    },

};