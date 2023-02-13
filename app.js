function displayComments(respnse) {
    console.log(respnse.data[0].email);
}



let url="https://jsonplaceholder.typicode.com/comments";
axios.get(url).then(displayComments);
