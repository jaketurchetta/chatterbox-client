var Parse = {

  // server: `http://parse.${window.CAMPUS}.hackreactor.com/chatterbox/classes/messages`,

  server: `http://parse.sfo.hackreactor.com/chatterbox/classes/messages`,

  create: function(message, successCB, errorCB = null) {
<<<<<<< HEAD
    $.ajax({
=======
    // todo: save a message to the server
    // POST goes here
    // console.log(context);
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
>>>>>>> 1e5e73eb6b719361a234feb3ac669e43d0c80d6d
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
<<<<<<< HEAD
      success: successCB,
      error: errorCB || function(error) {
      console.error('chatterbox: Failed to fetch messages', error);
      }
      });
=======
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
>>>>>>> 1e5e73eb6b719361a234feb3ac669e43d0c80d6d
  },

  readAll: function(successCB, errorCB = null) {
    console.log('HERE2');
    $.ajax({
      url: Parse.server,
      type: 'GET',
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  }

};