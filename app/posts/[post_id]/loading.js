export default function Loading() {
  return (
    <div className="main-div">
      <div className="spinner-border" style={{width:"100px" , height:"100px"}} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}