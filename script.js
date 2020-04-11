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
changeInput = () => {
    $('.input-form').on('keyup', 'textarea', function() {
        $('.root').empty();
        let input = getInput()
        $('.root').append(`${input}`)
        $('.root').removeClass('hidden');
        console.log(input)
    })
}
watchForm = () => {
    $('form').submit(e => {
        e.preventDefault();
        displayResults()
    })
}

$(function() {
    changeInput();
})