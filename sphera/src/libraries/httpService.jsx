const baseUrl = "http://sphera.academy/";



export function login(userName, password){
    let formData  = new FormData();
    formData.append("username", userName);
    formData.append("password", password);
    httpPost.then(data=>{
        console.log("Loged in");
        console.log(data);
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('username', data.username);
    });
}


export function register(userName, password, email,name){
    let formData  = new FormData();
    formData.append("username", userName);
    formData.append("password", password);
    formData.append("email", email);
    formData.append("name", name);
    httpPost.then(data=>{
        console.log("Loged in");
        console.log(data);
        localStorage.setItem('access_token', data.access_token);
        localStorage.setItem('username', data.username);
    });
}


export function httpPost(controller,httpHandler, dataToSend) {
    const controller = props.controller;
    const httpHandler = props.httpHandler;
    const dataToSend = props.data;

    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(dataToSend)
    };
    let url = `${baseUrl}/${controller}/${httpHandler}`;
    fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        })
        .catch(err => console.log(err));;

}


function objToQueryString(obj) {
    const keyValuePairs = [];
    for (const key in obj) {
      keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
    return keyValuePairs.join('&');
  }
