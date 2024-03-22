document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById('formId');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        var search = document.getElementById('search').value;
        var originalname = search.split(' ').join('');

        const token = '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';

        fetch("https://api.github.com/users/" + search, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((result) => result.json())
        .then((data) => {
            console.log(data);
            document.getElementById("result").innerHTML = `<img src="${data.avatar_url}"/>`;
            document.getElementById("result1").innerHTML = `<h1>${data.name}</h1>`;
            document.getElementById("result2").innerHTML = `<h2>${data.bio}</h2>`;
            document.getElementById("result3").innerHTML = `<h4>Followers:${data.followers}</h4>`;
            document.getElementById("result4").innerHTML = `<h3>Repositories:${data.public_repos}</h4>`;
        });
    });
});
