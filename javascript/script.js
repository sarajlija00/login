function login (){
    let xhttp = new XMLHttpRequest ();
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
            document.getElementById ('error').style = 'display:none';
            token = JSON.parse (xhttp.responseText);
        }
        if (xhttp.readyState == 4 && xhttp.status != 200) {
            document.getElementById ('error').innerHTML = 'Incorrect mail or password';
        }
    }
    xhttp.open ("POST", 'https://3d1pftib26.execute-api.eu-west-1.amazonaws.com/dev/user/login', true);
    xhttp.setRequestHeader ("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(str);   
}
let token;

function send (){
    let xhttp = new XMLHttpRequest ();
    xhttp.open ("GET", 'https://3d1pftib26.execute-api.eu-west-1.amazonaws.com/dev/user/profile', true);
    xhttp.setRequestHeader ('Authorization', token.token);
    xhttp.send ();
    xhttp.onreadystatechange = function (){
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let responseObject = JSON.parse (xhttp.responseText);
            document.getElementById ('response').innerHTML = `
                ID: ${responseObject.id} <br>
                First name: ${responseObject.first_name} <br>
                Last name: ${responseObject.last_name} <br>
                E-mail: ${responseObject.email} <br>
            `;
            
        }
    }
}

function glr(){
    let xhttp = new XMLHttpRequest ();
    xhttp.onreadystatechange = function (){
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let responseObject = JSON.parse (xhttp.responseText);
            let url = responseObject.base_url;
            let data = responseObject.Contents;
            for (i = 0; i < data.length; i++){
                let photoLink = url + '/' + data[i].Key; 
                document.getElementById('gall').innerHTML += `<img src ="${photoLink}" width="300px" height="300px" class="col-sm-4">`;
                }
            }
        }
    xhttp.open ("GET",'https://3d1pftib26.execute-api.eu-west-1.amazonaws.com/dev/images/list', true);
    xhttp.setRequestHeader ('Authorization', token.token);
    xhttp.send();
}
