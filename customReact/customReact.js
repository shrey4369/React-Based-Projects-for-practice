function customRender(reactElement, container) {

    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)
    */

    // Better code than above

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const reactElementTwo = {
    type: 'img',
    props: {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX5vnHdn0pL9uBJQRDMTqVEBux0hrUsUbYHQ&s',
        alt: 'Online Image'
    },
    children: 'This is an online Image'
}

const mainContainer = document.getElementById("root")
const imageContainer = document.getElementById("root")

customRender(reactElementTwo, imageContainer)
customRender(reactElement, mainContainer) 