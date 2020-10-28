import styles from './SingleCard.module.css'

const SingleCard = ({image, title, id}) => {
 return(
     <section id={id} key={id}>
         <img 
            src={image} 
            alt={title} 
            className={styles.singleCardImage}
        />
     </section>
 )   
}
export default SingleCard;  