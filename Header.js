import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({onAdd, showAdd}) => {
  return (
    <header>
      <h1>Add Member</h1>
      <Button color= {showAdd ? 'blue' : 'green'} 
      text = {showAdd ? 'Close' : 'Add'} 
      onClick={onAdd} />
    
    </header>
  )
}
Header.defaultProps ={
    title: 'Add New Member',
  }
  Header.propTypes ={
    title:PropTypes.string.isRequired,
    }

export default Header
