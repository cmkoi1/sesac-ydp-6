// props.children
// 부모 컴포넌트에서 자식 컴포넌트 호출 시 태그 사이에 
import './Button.css';
import PropTypes from 'prop-types';
const Button=(props)=>{
  console.log(props);
  const {link, children} = props
  return(
    <>
      <a href={link}>
        <button className="Button">{children}</button>
      </a>
    </>
  )
}
Button.defaultProps={
  children : '네이버',
  link : 'https://www.naver.com'
}
Button.propTypes = {
  children : PropTypes.string,
  link : PropTypes.string,
}
export default Button;