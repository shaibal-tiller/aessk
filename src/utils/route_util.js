import Print from "../components/Print"
import Home from "../shared/Home"
const createRoute = (path, Element) => {
    return { path: path, element: Element }
}

export const routes = [
    createRoute('/', <Home />),
    createRoute('/print',<Print />),
   ]