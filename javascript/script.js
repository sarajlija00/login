function login (){
    let xhttp = new XMLHttpRequest;
    let email = document.getElementById ('email').value;
    let password = document.getElementById ('password').value;
    xhttp.onreadystatechange = function (){
        if(xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById ('correct').innerHTML = xhttp.responseText;
        }
        if (xhttp.readyState == 4 && xhttp.status != 200) {
            document.getElementById ('error').innerHTML = 'Incorrect mail or password, please try again';
        }

    }
    xhttp.open ("POST", 'https://3d1pftib26.execute-api.eu-west-1.amazonaws.com/dev/user/login', true);
    xhttp.setRequestHeader ("Content-Type", "application/json;charset=UTF-8");
    xhttp.send()

    
}