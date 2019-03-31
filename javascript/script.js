function login (){
    let xhttp = new XMLHttpRequest;
    let obj = {};
    obj.email = document.getElementById ('email').value;
    obj.password = document.getElementById ('password').value;
    let  str = JSON.stringify(obj);
    xhttp.onreadystatechange = function (){
        if(xhttp.readyState == 4 && xhttp.status == 200) {
            document.getElementById ('snd'). style = 'display:block';
            document.getElementById ('correct').style = 'display:none';
            document.getElementById ('correct').innerHTML = xhttp.responseText;
            let  responseObject = JSON.parse (xhttp.responseText);
            document.getElementById ('result').innerHTML = responseObject.token;
            token = JSON.parse (xhttp.responseText);
        }
        if (xhttp.readyState == 4 && xhttp.status != 200) {
            document.getElementById ('error').innerHTML = 'Incorrect mail or password';
            document.getElementById ('error').value = "";
        }
 
    }
    xhttp.open ("POST", 'https://3d1pftib26.execute-api.eu-west-1.amazonaws.com/dev/user/login', true);
    xhttp.setRequestHeader ("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(str);   
}
let token;

function send (){
    xhttp = new XMLHttpRequest;
    xhttp.open ("GET", 'https://3d1pftib26.execute-api.eu-west-1.amazonaws.com/dev/user/profile', true);
    xhttp.setRequestHeader ('Authorization', token.token);
    xhttp.send ();

}