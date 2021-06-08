const signup = document.querySelector("#signup");

signup.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = signup["signup-email"].value;
    const password = signup["signup-password"].value;

    //singing up the user using firebase
    auth.createUserWithEmailAndPassword(email, password) //this functino returns the credentials of a user
        .then((cred) => {
            console.log(cred);
            signup.reset();
            //container_signup.style.display = 'none';
        })
        .catch((err) => {
            alert(err.message);
        });
});

const login = document.querySelector("#login");

login.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = login["login-email"].value;
    const password = login["login-password"].value;

    //LOGING IN
    auth.signInWithEmailAndPassword(email, password)
        .then((cred) => {
            console.log(cred, cred.user, cred.uid);
        })
        .catch((err) => {
            alert("The account does not exist or there was an error!");;
        });
    login.reset();
});

auth.onAuthStateChanged((user) => {
    //user is null if person is signed out otherwise its the user object
    console.log(user);
    if (user) {
        window.location = "data_enter/data.html"
    } 
});