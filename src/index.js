import { createRoot} from "react-dom/client"
import App from "./App"

console.log('Tudo certo')

const root  =   createRoot(document.querySelector('#root'))

root.render(<App/>)