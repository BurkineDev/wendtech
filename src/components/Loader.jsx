const Loader = ({ isLoading }) => (
  <div className={`loader ${isLoading ? '' : 'hidden'}`} aria-hidden={!isLoading}>
    <div>
      <div className="loader-mark">WEND<span>TECH</span></div>
      <div className="loader-bar"><i /></div>
    </div>
  </div>
)

export default Loader
