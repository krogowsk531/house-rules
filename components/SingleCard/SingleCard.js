const SingleCard = ({image, title, id}) => {
 return(
     <section>
         <h2>hey</h2>
         <img src={image} alt={title} key={id}/>
     </section>
 )   
}
export default SingleCard;  