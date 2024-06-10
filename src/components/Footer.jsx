function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer wrapper">
      <div className="col">
        <h3>Artsy Active Kids</h3>
        <p className="copyright">&copy; Copyright {year}</p>
      </div>
      <div className="col">
        <p className="small-text">
          Made with ♥️ by{" "}
          <a href="https://silverlightcreative.com" target="_blank">
            Silverlight Creative
          </a>
        </p>
      </div>
    </footer>
  )
}
export default Footer
