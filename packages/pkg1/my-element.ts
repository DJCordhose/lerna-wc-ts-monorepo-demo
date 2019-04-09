import 'pkg2/my-other-element'

const template = `
<style>
p {
  background: #1E88E5;
  color: white;
  padding: 2rem 4rem;
  border: 0;
  margin: 10px 10px;
  font-size: 1.5rem;
}
</style>
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