function greetingMesssage()
{
  var today = new Date()
  var curHr = today.getHours()

  var greetingMsg = document.getElementById("greeting");
  var date = document.getElementById("date-greet");
  var today = document.getElementById("today-greet");

  if (curHr < 12)
  {
    console.log('Good Morning!')
    greetingMsg.textContent = 'Good Morning!'
  }

  else if (curHr < 17)
  {
    console.log('Good Afternoon!')
    greetingMsg.textContent = 'Good Afternoon!'
  }

  else if (curHr < 21)
  {
    console.log('Good Evening!')
    greetingMsg.textContent = 'Good Evening!'
  }

  else
  {
    console.log('Good Night!')
    greetingMsg.textContent = 'Good Night!'
  }

  /////////////////////////////// Get date and day /////////////////////////////
  n =  new Date();
  y = n.getFullYear();
  m = n.getMonth() + 1;
  d = n.getDate();

  date.textContent = m + "/" + d + "/" + y;
  today.textContent = new Date().toDateString();

  var date = new Date('1970-01-01');  //or your date here
  //////////////////////////////////////////////////////////////////////////////

  /////////////////// Pop up for greeting message discount /////////////////////
  $(function()
  {
    var overlay = $('<div id="overlay"></div>');
    overlay.show();
    overlay.appendTo(document.body);
    $('.popup').show();

    $('.closeMsg').click(function()
    {
      $('.popup').hide();
      overlay.appendTo(document.body).remove();
      return false;
    });

    $('.x').click(function()
    {
      $('.popup').hide();
      overlay.appendTo(document.body).remove();
      return false;
    });
  });
  //////////////////////////////////////////////////////////////////////////////
}
