let converter = new showdown.Converter();
/*
Use this code if you want to use the submit button

function displayResults() {
    $('.root').empty();
    let input = getInput()
    $('.root').append(`${input}`)
    $('.root').removeClass('hidden');
    console.log(input)
}

watchForm = () => {
    $('form').submit(e => {
        e.preventDefault();
        displayResults()
    })
}
*/
//this code will show the input as it's being typed
changeInput = () => {
    $('.input-form').on('keyup', 'textarea', function () {
        //not sure if this .empty is needed for this code
        $('.root').empty();
        let input = getInput()
        $('.root').append(`${input}`)
        $('.root').removeClass('hidden');
        console.log(input)
    })
}
getInput = () => {
    let input = document.getElementById('markdown').value
    let html = converter.makeHtml(input)
    return html
}

$(function() {
    changeInput();
})