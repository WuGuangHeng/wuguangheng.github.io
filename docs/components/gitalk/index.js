const gitalk = new Gitalk({
  clientID: '661243c155299855f4d8',
  clientSecret: '4ba0f2578bf032e6deaf08df1ef0642f113dc224',
  repo: 'lxhyl.github.io',
  owner: 'lxhyl',
  admin: ['lxhyl'],
  id: location.pathname.slice(0, 50),
  // facebook-like distraction free mode
  distractionFreeMode: false
})