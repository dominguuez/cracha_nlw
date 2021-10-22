//objeto
const Links = {
  github: 'dominguuez',
  youtube: 'CortesdoCasimitoOFICIAL',
  instagram: 'http_dominguez',
  facebook: 'maykbrito',
  twitter: 'YuriDom13282524'
}

//funçao
function ChangeSocialMediaLinks() {
  for (let li of SocialLinks.children) {
    const Social = li.getAttribute('class')

    li.children[0].href = `https://${Social}.com/${Links[Social]}`
  }
}

ChangeSocialMediaLinks()

function GetGitHubProfileInfos() {
  const url = `https://api.github.com/users/${Links.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      UserName.textContent = data.name
      UserBio.textContent = data.bio
      UserLink.href = data.html_url
      UserImage.src = data.avatar_url
      UserLogin.textContent = data.login
    })
}

GetGitHubProfileInfos()
