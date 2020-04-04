

var Friends = {

  friendsList : [],

  //if the user clicks on username, call toggleStatus
  onClickAddFriend: function() {
    // $(document).on('click', '#messageBox.username', function() {console.log("clicked")});

    $('.username').on('click', function () {
      var $user = $(this);
      var textUserName = $user.text();

      // console.log("clicked");
      Friends.toggleStatus(textUserName);
    });
  },

  // $(document).on('click','.username', Friend.toggleStatus() {
  //   var friend = this.username;
  //   this.storage.push(friend);
  // }),

  toggleStatus: function(friend) {
    Friends.friendsList.push(friend);
  }
}