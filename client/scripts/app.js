var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() { //sets initial state
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
    console.log('HERE');

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    var cb = (data) => {
      // examine the response from the server request:
      console.log(data); //do more work here. add the data to our messages, into messages object.
      Messages.updateMessages(data);


      callback();
    }

    Parse.readAll(cb);
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};