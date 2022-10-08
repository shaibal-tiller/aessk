import Home from "../shared/Home"
const createRoute = (path, Element) => {
    return { path: path, element: Element }
}

export const routes = [
    createRoute('/', <Home />),
   ]