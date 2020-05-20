function handleLogin(event){
    login();
};

function handleRegistration(event){
alert('Regjistrimi u krye me sukses!');
window.location = "index.html"
};


function login(){
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;

	
	if(username == "viola" && password == "1234"){
		alert("Logimi i suksesshem!");
		window.location = "home.html"
		return true;
	}
	else if(username=="" || password=="")
		alert("Plotesoni te dhenat tuaja!")
	else{
		alert("Emri ose fjalekalimi jane gabim!");
		return false;
	}
}