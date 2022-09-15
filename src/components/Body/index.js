import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="num-container">
              <h1 className="body-heading">Left Navbar Menu</h1>
              <ul className="u-list">
                <li className="context-para">item 1</li>
                <li className="context-para">item 2</li>
                <li className="context-para">item 3</li>
                <li className="context-para">item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="context-container">
              <h1 className="body-heading">Context</h1>
              <p className="context-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incidiunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="num-container">
              <h1 className="body-heading">Right Navbar</h1>
              <div className="Ad">
                <h1 className="context-para">Ad 1</h1>
              </div>
              <div className="Ad">
                <h1 className="context-para">Ad 2</h1>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
