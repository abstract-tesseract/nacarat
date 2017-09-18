export default function AuthenticationService($http, $firebaseAuth, $q, config, firebase) {
  var firebaseConfig = {
    apiKey: "AIzaSyDRuo6qjELmEFIwEHZkD9t81BoHKMfW4mY",
    authDomain: "nacarat-2be74.firebaseapp.com",
    databaseURL: "https://nacarat-2be74.firebaseio.com",
    projectId: "nacarat-2be74",
    //storageBucket: "nacarat-2be74.appspot.com",
    //messagingSenderId: "421681862561"
  };
  firebase.initializeApp(firebaseConfig);
  var firebaseAuthObject = $firebaseAuth();
  var nacaratAuthenticatedUser = firebaseAuthObject.$getAuth();
  var user = {};
  var service = this;

  service.register = register;
  service.logIn = logIn;
  service.logOut = logOut;
  service.isLoggedUserIn = isLoggedUserIn;
  service.signInWithPopup = signInWithPopup;
  service.getAuthenticatedUser = getAuthenticatedUser;
  service.requireSignIn = requireSignIn;
  //service.sendWelcomeEmail = sendWelcomeEmail;

  function register(user) {
    return firebaseAuthObject.$createUserWithEmailAndPassword(user.email, user.password);
  }

  function logIn(user) {
    return firebaseAuthObject.$signInWithEmailAndPassword(user.email, user.password);
  }

  function logOut() {
    firebaseAuthObject.$signOut();
  }

  function isLoggedUserIn() {
    var userLoggedIn = firebaseAuthObject.$getAuth();
    console.log('userLoggedIn', userLoggedIn);
    return userLoggedIn && userLoggedIn.uid ? true : false;
  }

  function getAuthenticatedUser() {
    if (!!nacaratAuthenticatedUser) {
      user = {
        //credential: loginResponse.credential,
        uid: nacaratAuthenticatedUser.uid,
        displayName: nacaratAuthenticatedUser.displayName,
        email: nacaratAuthenticatedUser.email,
        emailVerified: nacaratAuthenticatedUser.emailVerified,
        photo: nacaratAuthenticatedUser.photoURL,
        isAnonymous: nacaratAuthenticatedUser.isAnonymous,
        refreshToken: nacaratAuthenticatedUser.refreshToken
      };
    }
    return user;
  }

  function signInWithPopup(provider) {
    return firebaseAuthObject.$signInWithPopup(provider);
  }

  function requireSignIn() {
    return firebaseAuthObject.$requireSignIn(false);
  }

  // function sendWelcomeEmail(emailAddress) {
  //   firebaseDataService.emails.push({
  //     emailAddress: emailAddress
  //   });
  // }

}