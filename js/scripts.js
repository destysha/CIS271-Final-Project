
  //MYFUNCTION () TOGGLES THE RESPONSIVE MAIN NAV BAR WHEN WEBSITE SIZE IS 950px =<
  function toggleNav()
  {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
  }

  /************************** SELECT SIZE in ITEMS ****************************/
  $("body").on("click", "label", function()
  {
    var getValue = $(this).attr("for");
    var goToParent = $(this).parents(".select-size-adult");
    var getInputRadio = goToParent.find("input[id = " + getValue + "]");
    //console.log(getInputRadio.attr("id"));
  });

  $("body").on("click", "label", function()
  {
    var getValue = $(this).attr("for");
    var goToParent = $(this).parents(".select-size-child");
    var getInputRadio = goToParent.find("input[id = " + getValue + "]");
    //console.log(getInputRadio.attr("id"));
  });


  //*************** CHANGE LOGO FONT COLOR WHEN HOVER OVER *******************//
  function onHover()
  {
      $("#logo-image").attr('src', 'images/logoWhite.png');
  }

  function offHover()
  {
      $("#logo-image").attr('src', 'images/logoBlack.png');
  }

  function onHoverItem()
  {
      $("#logo-image").attr('src', '../images/logoWhite.png');
  }

  function offHoverItem()
  {
      $("#logo-image").attr('src', '../images/logoBlack.png');
  }


  /* When the user clicks on the button,
  toggle between hiding and showing the dropdown content */
  $(document).ready(function()
  {
    var ddrown_open = false;
    $('.dropbtn').on('click', function(e)
    {
      e.stopPropagation();
      $('.dropdown-content').each(function()
      {
        $(this).hide();
      });

      $('.dropbtn').each(function()
      {
        $(this).removeClass('active');
      });

      $(this).addClass('active');
      $(this).parent('.dropdown').find('.dropdown-content').show();
      ddrown_open = true;
    });

    $('body').click( function()
    {
      if(ddrown_open ==  true)
      {
        $('.dropdown-content').each(function()
        {
          ddrown_open ==  false;
          $(this).hide();
        });

        $('.dropbtn').each(function(){ $(this).removeClass('active'); });
      }

      if(modal_open == true){ }
    });
  });

  // custom modal script //
  var modal_open            = false;
  var my_custom_modal       = document.getElementById('my_custom_modal');
  var my_modal_show_btn     = document.getElementById("my_custom_show_btn");
  var my_modal_hide_btn     = document.getElementById("close");
  my_modal_show_btn.onclick = function()
  {
    modal_open = true;
    my_custom_modal.style.display = "block";
  }
  my_modal_hide_btn.onclick = function()
  {
      my_custom_modal.style.display = "none";
  }
  window.onclick = function(event)
  {
      if (event.target == my_custom_modal)
      {
        my_custom_modal.style.display = "none";
      }
  }
  // custom modal script ends //



  /********** CHANGE BACKGROUND COLOR OF EACH ITEM-NAME INSIDE CART ***********/
  /*************************** USING FOR LOOP *********************************/
  const listItems = document.querySelectorAll('.shopping-cart-items .item-name');
  for (let i = 0; i < listItems.length; i++)
  {
    if(i%2 == 0)
    {
      listItems[i].style.backgroundColor = 'rgb(242, 232, 232)';
      listItems[i].style.padding = '7px 0';
    }
  }
 /*****************************************************************************/

  /******************************* CART ***************************************/
  jQuery(document).ready(function()
  {
      // This button will increment the value
      $('.qtyplus').click(function(e)
      {
          // Stop acting like a button
          e.preventDefault();
          // Get the field name
          fieldName = $(this).attr('field');
          // Get its current value
          var currentVal = parseInt($('input[name='+fieldName+']').val());
          // If is not undefined
          if (!isNaN(currentVal))
          {
              // Increment
              $('input[name='+fieldName+']').val(currentVal + 1);
          }
          else
          {
              // Otherwise put a 0 there
              $('input[name='+fieldName+']').val(0);
          }
      });

      // This button will decrement the value till 0
      $(".qtyminus").click(function(e)
      {
          // Stop acting like a button
          e.preventDefault();
          // Get the field name
          fieldName = $(this).attr('field');
          // Get its current value
          var currentVal = parseInt($('input[name='+fieldName+']').val());
          // If it isn't undefined or its greater than 0
          if (!isNaN(currentVal) && currentVal > 0)
          {
              // Decrement one
              $('input[name='+fieldName+']').val(currentVal - 1);
          }
          else
          {
              // Otherwise put a 0 there
              $('input[name='+fieldName+']').val(0);
          }
      });
  });

  //toggle the shoping cart when clicked
  (function()
  {
    $("#cart").on("click", function()
    {
      $(".shopping-cart").fadeToggle( "fast");
    });

  })();

  //hide the shoping cart when clicked outside it
  $(document).mouseup(function(e)
  {
      var container = $(".shopping-cart");

      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0)
      {
          container.hide();
      }
  });
/******************************************************************************/

/********************************** SEARCH ************************************/
// Open the full screen search box
function openSearch()
{
  document.getElementById("myOverlay").style.display = "block";
}

// Close the full screen search box
function closeSearch()
{
  document.getElementById("myOverlay").style.display = "none";
}

//Search within the list of items//
function searchList()
{
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");

    if(document.getElementById('myInput').value.length > 0)
    {
      ul.style.display = 'block';
    }
    else
    {
      ul.style.display = 'none';
    }

    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++)
    {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1)
        {
            li[i].style.display = "";
        }
        else
        {
            li[i].style.display = "none";
        }
    }
}
/******************************************************************************/

/************************** FORM INPUT VALIDATION *****************************/
var goodColor = "#66cc66";
var badColor  = "#ff6666";

//get user email input element id in login form
var loginEmail = document.getElementById("emailF1");
if (loginEmail.addEventListener)
{
  loginEmail.addEventListener("blur", validateEmailLogin, false);
}
else
{
  loginEmail.attachEvent("onblur", validateEmailLogin);
}


//get user email element id in create form
var createEmail = document.getElementById("emailF2");
if (createEmail.addEventListener)
{
  createEmail.addEventListener("blur", validateEmailCreate, false);
}
else
{
  createEmail.attachEvent("onblur", validateEmailCreate);
}


//get user name element id in create form
var firstname = document.getElementById("fname");
if (firstname.addEventListener)
{
  firstname.addEventListener("blur", validateName, false);
}
else
{
  firstname.attachEvent("onblur", validateName);
}


//get user lastname element id in create form
var lastname = document.getElementById("lname");
if (lastname.addEventListener)
{
  lastname.addEventListener("blur", validateLastName, false);
}
else
{
  lastname.attachEvent("onblur", validateLastName);
}


//get user pass element id in login form
var passwd1 = document.getElementById('passwd1');
if (passwd1.addEventListener)
{
  passwd1.addEventListener("blur", checkPassLogin, false);
}
else
{
  passwd1.attachEvent("onblur", checkPassLogin);
}


//get user pass element id in create form
var passwd2 = document.getElementById('passwd2');
if (passwd2.addEventListener)
{
  passwd2.addEventListener("blur", checkPassCreate, false);
}
else
{
  passwd2.attachEvent("onblur", checkPassCreate);
}


//get user re pass element id in create form
var passwd3 = document.getElementById('repass');
if (passwd3.addEventListener)
{
  passwd3.addEventListener("blur", confirmPass, false);
}
else
{
  passwd3.attachEvent("onblur", confirmPass);
}


//get submit element id in login form
var submitLogin = document.getElementById("submitF1");
if (submitLogin.addEventListener)
{
  submitLogin.addEventListener("click", loginDefault, false);
}
else
{
  submitLogin.attachEvent("onclick", loginDefault);
}


//get submit element id in create form
var submitCreate = document.getElementById("submitF2");
if (submitCreate.addEventListener)
{
  submitCreate.addEventListener("click", loginDefault, false);
}
else
{
  submitCreate.attachEvent("onclick", loginDefault);
}


///////////////////////// FUNCTION DECLARATIONS ////////////////////////////////
function loginDefault(e)
{
  e.preventDefault();
  console.log("Welcome to Lil Cutie Boutique!");
}


function validateEmailLogin()
{
  var errorMsg = document.getElementById('warning1F1');
  var emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (this.value == "")
  {
      errorMsg.style.color = badColor;
      $("#login input[name=emailF1]").css('box-shadow', '0 0 2px 2px red');
      errorMsg.textContent = "Email must be filled out";
      return false;
  }

  if ( !( this.value.match(emailRegex) ) )
  {
    errorMsg.style.color = badColor;
    $("#login input[name=emailF1]").css('box-shadow', '0 0 2px 2px red');
    errorMsg.textContent = this.value + " is not valid email address";
    return false;
  }

  errorMsg.style.color = goodColor;
  $("#login input[name=emailF1]").css('box-shadow', 'none');
  errorMsg.textContent = "Email is OK";
  //sets a 3 seconds timing for displaying the message
  setTimeout(function()
  {
    errorMsg.style.backgroundColor = "white";
    errorMsg.textContent = '';
  }, 3000);
}


function validateEmailCreate()
{
  var errorMsg = document.getElementById('warning3F2');
  var emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (this.value == "")
  {
      errorMsg.style.color = badColor;
      $("#c_account input[name=emailF2]").css('box-shadow', '0 0 2px 2px red');
      errorMsg.textContent = "Email must be filled out";
      return false;
  }

  if ( !( this.value.match(emailRegex) ) )
  {
    errorMsg.style.color = badColor;
    $("#c_account input[name=emailF2]").css('box-shadow', '0 0 2px 2px red');
    errorMsg.textContent = this.value + " is not valid email address";
    return false;
  }

  errorMsg.style.color = goodColor;
  $("#c_account input[name=emailF2]").css('box-shadow', 'none');
  errorMsg.textContent = "Email is OK";
  //sets a 3 seconds timing for displaying the message
  setTimeout(function()
  {
    errorMsg.style.backgroundColor = "white";
    errorMsg.textContent = '';
  }, 3000);
}


function checkPassLogin()
{
  var minCharLength = 8;
  var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  //get span element id
  var errMsg  = document.getElementById('warning2F1');

  //if pass has not enough chars/digits
  if ( this.value.length < minCharLength )
  {
    $("#login input[name=passF1]").css('box-shadow', '0 0 2px 2px red');
    errMsg.style.color = badColor;
    errMsg.textContent = "Password must be at least 8 digits long!";
  }

  //otherwise if pass has enough digits but does not contain the
  //required chars/digits at the beginning or within it
  else if ( this.value.length >= minCharLength && (! this.value.match(regex)) )
  {
    //this.value.style.backgroundColor = badColor;
    errMsg.style.color = badColor;
    $("#login input[name=passF1]").css('box-shadow', '0 0 2px 2px red');
    errMsg.textContent = "Password must contain at least one of these special characters !@#$%^&* "
                          "Must contain at least one upper case letter. "
                          "Must contain at least one lower case letter. "
                          "Must contain at least one digit. ";
  }

  //if username is valid
  if( this.value.match(regex) && this.value.length >= minCharLength )
  {
    //this.value.style.backgroundColor = goodColor;
    errMsg.style.color = goodColor;
    $("#login input[name=passF1]").css('box-shadow', 'none');
    errMsg.textContent = "Passwords is valid!";

    //sets a 3 seconds timing for displaying the message
    setTimeout(function()
    {
      errMsg.textContent = '';
    }, 3000);
  }
}


function checkPassCreate()
{
  var minCharLength = 8;
  var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  //get span element id
  var errMsg  = document.getElementById('warning4F2');

  //if pass has not enough chars/digits
  if ( this.value.length < minCharLength )
  {
    $("#c_account input[name=passF2]").css('box-shadow', '0 0 2px 2px red');
    errMsg.style.color = badColor;
    errMsg.textContent = "Password must be at least 8 digits long!";
  }

  //otherwise if pass has enough digits but does not contain the
  //required chars/digits at the beginning or within it
  else if ( this.value.length >= minCharLength && (! this.value.match(regex)) )
  {
    //this.value.style.backgroundColor = badColor;
    errMsg.style.color = badColor;
    $("#c_account input[name=passF2]").css('box-shadow', '0 0 2px 2px red');
    errMsg.textContent = "Password must contain at least one of these special characters !@#$%^&* "
                          "Must contain at least one upper case letter. "
                          "Must contain at least one lower case letter. "
                          "Must contain at least one digit. ";
  }

  //if username is valid
  if( this.value.match(regex) && this.value.length >= minCharLength )
  {
    //this.value.style.backgroundColor = goodColor;
    errMsg.style.color = goodColor;
    $("#c_account input[name=passF2]").css('box-shadow', 'none');
    errMsg.textContent = "Password is valid!";

    //sets a 3 seconds timing for displaying the message
    setTimeout(function()
    {
      errMsg.style.backgroundColor = "white";
      errMsg.textContent = '';
    }, 3000);
  }
}


function validateName()
{
  var errorMsg = document.getElementById('warning1F2');

  if (this.value == "")
  {
    errorMsg.style.color = badColor;
    $("#c_account input[name=firstname]").css('box-shadow', '0 0 2px 2px red');
    errorMsg.textContent = "First Name must be filled out";
    return false;
  }
  $("#c_account input[name=firstname]").css('box-shadow', 'none');
  errorMsg.textContent = " ";
}


function validateLastName()
{
  var errorMsg = document.getElementById('warning2F2');

  if (this.value == "")
  {
    errorMsg.style.color = badColor;
    $("#c_account input[name=lastname]").css('box-shadow', '0 0 2px 2px red');
    errorMsg.textContent = "Last Name must be filled out";
    return false;
  }

  $("#c_account input[name=lastname]").css('box-shadow', 'none');
  errorMsg.textContent = " ";
}


function confirmPass()
{
  var pass = $( "#passwd2" ).val();                    //gets input pass value
  var errMsg = document.getElementById('warning5F2');  //get span element id

  if ( this.value == "")
  {
    errMsg.style.color = badColor;
    $("#c_account input[name=repass]").css('box-shadow', '0 0 2px 2px red');
    errMsg.textContent = "Confirm password must be filled out";
    return false;
  }

  if (this.value == "" && pass == "")
  {
    errMsg.style.color = badColor;
    $("#c_account input[name=repass]").css('box-shadow', '0 0 2px 2px red');
    errMsg.textContent = "Password and confirm password must be filled out first";
    return false;
  }

  else
  {
    if (this.value != pass)
    {
      errMsg.style.color = badColor;
      $("#c_account input[name=repass]").css('box-shadow', '0 0 2px 2px red');
      errMsg.textContent = "Password did not match, retype";
      return false;
    }

    else
    {
      errMsg.style.color = goodColor;
      $("#c_account input[name=repass]").css('box-shadow', 'none');
      errMsg.textContent = "Passwords matched!";

      //sets a 3 seconds timing for displaying the message
      setTimeout(function()
      {
        errMsg.style.backgroundColor = "white";
        errMsg.textContent = '';
      }, 3000);
    }
  }
}


/******************************************************************************/
