// Mian variables
let theInput =  document.querySelector('.get-repos input'),
    getBtn = document.querySelector('.get-button'),
    reposData = document.querySelector('.show-data');

getBtn.onclick = function (){
    getRepos(); 
}
// Get Repos
function getRepos(){
    
    if(theInput.value == ''){
        reposData.innerHTML = '<span>Please Write Github Username.</span>';
    } else{
        fetch(`https://api.github.com/users/${theInput.value}/repos`)

        .then((response )=> response.json())

        .then((repositoires) => {

            reposData.innerHTML = '';

            /// Loop On Repositories
            repositoires.forEach(repo => {
                
                // Create the Main Div
                let mainDiv = document.createElement('div');

                // Create repo name text
                let repoName = document.createTextNode(repo.name);

                // Append the text to Main Div
                mainDiv.appendChild(repoName);

                // Create rpo URL Anchor
                let theUrl = document.createElement('a');

                // Create URL text
                let theUrlText = document.createTextNode('Visit');

                // Append the URl text
                theUrl.appendChild(theUrlText);

                // Add the hypertext Refrence "href"
                theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;

                // Set Attribute Set
                theUrl.setAttribute('target', '_blanc');

                // Append Url Anchor to mainDiv
                mainDiv.appendChild(theUrl);

                // Create stars Count span
                let starsSpan = document.createElement('span');

                // Create The stars count text 
                let starsText = document.createTextNode(`Stars ${repo.stargazers_count}`);

                // Add stars count text tos starsDpan
                starsSpan.appendChild(starsText);

                //Append starsSpan to mainDiv
                mainDiv.appendChild(starsSpan);

                // Add calss to mainDiv
                mainDiv.className = 'repo-box';

                // container append the main Div
                reposData.appendChild(mainDiv);
                
            });
        });
    }
}
