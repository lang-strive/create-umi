import NotPage from '../assets/404.png';
const NotpageStyles={
  width:'100%',
  margin:'20px 0 0 0'
};
export default ()=> {
    return (
      <div>
        <img src={NotPage} style={NotpageStyles}/>
      </div>
    );
};