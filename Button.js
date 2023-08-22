import propTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
   
  return (
      <button onClick={onClick}  
      className='btn'
      style={{backgroundColor: color}}>{text}
      </button>
     
  )
}

Button.defaultProps ={
    color: 'green',
    text: 'Add Member',
}
Button.propTypes ={
    text: propTypes.string,
    color: propTypes.string,
    onClick: propTypes.func,
}
export default Button
