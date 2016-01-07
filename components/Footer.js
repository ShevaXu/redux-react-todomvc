import React, { PropTypes } from 'react'
import classnames from 'classnames'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../ducks/filter'

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

const Footer = (props) => {
  const renderFilterLink = (filter) => {
    const title = FILTER_TITLES[filter]
    const { filter: selectedFilter, onShow } = props

    return (
      <a className={classnames({ selected: filter === selectedFilter })}
        style={{ cursor: 'pointer' }}
        onClick={ () => onShow(filter) }>
        { title }
      </a>
    )
  }

  const { completedCount, activeCount, onClearCompleted } = props

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{ activeCount || 'No' }</strong> { activeCount === 1 ? 'item' : 'items' } left
      </span>
      <ul className="filters">
        { [SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filter =>
          <li key={ filter }>
            { renderFilterLink(filter) }
          </li>
        )}
      </ul>
      { (() => {
        if (completedCount > 0) {
          return (
            <button className="clear-completed"
              onClick={ onClearCompleted } >
              Clear completed
            </button>
          )
        }
      })() }
    </footer>
  )
}

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired,
  filter: PropTypes.oneOf([
    SHOW_ALL,
    SHOW_COMPLETED,
    SHOW_ACTIVE
  ]).isRequired
}

export default Footer
