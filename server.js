const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    createServer((req, res) => {
        // Be sure to pass `true` as the second argument to `url.parse`.
        // This tells it to parse the query portion of the URL.
        const parsedUrl = parse(req.url, true)
        const { pathname, query } = parsedUrl

        if (pathname === '/why-wishup/') {
            app.render(req, res, '/why-wishup', query)
        } else if (pathname === '/virtual-assistant-faq/') {
            app.render(req, res, '/faq', query)
        } else if (pathname === '/virtual-assistant-pricing/') {
            app.render(req, res, '/pricing', query)
        }
        else if (pathname === '/virtual-assistant-pricing/') {
            app.render(req, res, '/pricing', query)
        }
        else if (pathname === '/what-we-do/') {
            app.render(req, res, '/whatwedolist', query)
        }
        else if (pathname.indexOf("/hire") >= 0) {
            let query = {name: pathname.replace("/hire")};
            app.render(req, res, '/whatwedo', query)
        }
        else if (pathname.indexOf("/location/") >= 0) {
            let query = {name: pathname.replace("/location/")};
            app.render(req, res, '/location', query)
        }
        else if (pathname.indexOf("virtual-assistants") >= 0) {
            app.render(req, res, '/location', query)
        }
        else if (pathname.indexOf("/testimonial/") >= 0) {
            app.render(req, res, '/testimonials', query)
        }
        else if (pathname.indexOf("/become-va/") >= 0) {
            app.render(req, res, '/become', query)
        }
        else if (pathname.indexOf("/about/") >= 0) {
            app.render(req, res, '/about', query)
        }
        else {
            handle(req, res, parsedUrl)
        }
    }).listen(3002, err => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
    })
})
