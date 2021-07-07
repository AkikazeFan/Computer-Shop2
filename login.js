 function validate() {
      
         if( document.loginform.email.value == "" ) {
            alert( "Please enter your email!" );
            document.loginform.email.focus() ;
            return false;
         }
         if( document.loginform.password.value == "" ) {
            alert( "Please enter your password" );
            document.loginform.password.focus() ;
            return false;
         }
         window.location.replace("home.html");
         // return( true );
      }