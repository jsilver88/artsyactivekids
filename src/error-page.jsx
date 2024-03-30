import { Link, useRouteError } from "react-router-dom"

function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link className="error-link" to="/">
        Go Back
      </Link>
    </div>
  )
}
export default ErrorPage
