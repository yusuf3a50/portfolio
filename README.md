# portfolio
personal portfolio react web app


howtos followed in setting up this site:

1. https://github.com/yusuf3a50/wiki/blob/main/node_manual_installation_on_ubuntu_debian.md
2. https://create-react-app.dev/docs/getting-started/
3. `touch .gitignore && echo "node_modules/" >> .gitignore && git rm -r --cached node_modules ; git status`
4. https://isotropic.co/react-multiple-pages/
5. https://react-bootstrap.netlify.app/docs/components/navbar
6. https://codepen.io/geoffgraham/pen/jrWwWM?editors=1100
7. https://medium.com/@nutanbhogendrasharma/design-page-layout-and-styling-in-react-application-part-3-448d70263f70

[github pages with react app](https://github.com/gitname/react-gh-pages)
https://create-react-app.dev/docs/adding-images-fonts-and-files/


to allow `npm run build` [allocate more swap space to t3-micro instance](https://stackoverflow.com/questions/17173972/how-do-you-add-swap-to-an-ec2-instance)
then increase the amount of memory node uses by:
`export NODE_OPTIONS=--max-old-space-size=8192`