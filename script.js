let converter = new showdown.Converter();

function displayResults() {
    $('.root').empty();
    let input = getInput()
    $('.root').append(`${input}`)
    $('.root').removeClass('hidden');
    console.log(input)
}

getInput = () => {
    let input = document.getElementById('markdown').value
    let html = converter.makeHtml(input)
    return html
}

watchForm = () => {
    $('form').submit(e => {
        e.preventDefault();
        displayResults()
    })
}

$(function() {

    watchForm();
})