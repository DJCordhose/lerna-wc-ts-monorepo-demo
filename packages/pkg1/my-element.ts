import 'pkg2/my-other-element'

const template = `
<p>Package 1</p>
<other-element></other-element>
`

class MyElement extends HTMLElement {
    constructor() {
        super()
        this.render()
    }

    render() {
        this.attachShadow({mode: 'open'})
        this.shadowRoot!.innerHTML = template

    }
}
customElements.define('my-element', MyElement)