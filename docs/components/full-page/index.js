const fullpage = `
<svg t="1640168719807" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4846" width="18" height="18"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#29CC41" p-id="4847"></path><path d="M268.885333 377.173333l389.973334 389.802667-417.792 27.818667z m92.330667-92.330666l389.888 389.888 27.818667-417.792z" fill="#026400" p-id="4848"></path></svg>
`
const cancelFullpage = `
<svg t="1640168836072" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5010" width="18" height="18"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#2CCD42" p-id="5011"></path><path d="M853.333333 512l-341.333333 341.333333V554.666667a42.666667 42.666667 0 0 1 42.666667-42.666667H853.333333zM512 170.666667v298.666666a42.666667 42.666667 0 0 1-42.666667 42.666667H170.666667l341.333333-341.333333z" fill="#036102" p-id="5012"></path><path d="M512 0a512 512 0 1 1 0 1024A512 512 0 0 1 512 0z m0 25.6a486.4 486.4 0 1 0 0 972.8A486.4 486.4 0 0 0 512 25.6z" fill="#29A92B" p-id="5013"></path></svg>
`
// init
const div = document.createElement('div')
div.innerHTML = fullpage
div.className = 'lxhyl-full-page'

// Change icon when full screen change
document.onfullscreenchange = () => {
  const isFullPage = document.fullscreenElement
  div.innerHTML = isFullPage ? cancelFullpage :  fullpage
}
// handle click
div.onclick = () => {
  const isFullPage = document.fullscreenElement
  isFullPage ?  document.exitFullscreen() : document.body.requestFullscreen()
}

// append to page
document.body.appendChild(div)