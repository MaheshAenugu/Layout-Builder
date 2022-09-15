import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = () => {
        onToggleShowContent()
      }
      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="container">
          <h1 className="layout-heading">Layout</h1>
          <>
            <input
              checked={showContent}
              type="checkbox"
              onChange={onChangeContent}
              id="content"
            />
            <label htmlFor="content">Content</label>
          </>
          <>
            <input
              checked={showLeftNavbar}
              type="checkbox"
              onChange={onChangeLeftNavbar}
              id="left"
            />
            <label htmlFor="left">Left Navbar</label>
          </>
          <>
            <input
              checked={showRightNavbar}
              type="checkbox"
              onChange={onChangeRightNavbar}
              id="right"
            />
            <label htmlFor="right">Right Navbar</label>
          </>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
