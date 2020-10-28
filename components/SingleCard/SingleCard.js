import styles from './SingleCard.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const SingleCard = ({image, title, id}) => {
 const router = useRouter()
 return(
    <Link href="/sample/" id={id} key={id}>
        <img 
            src={image} 
            alt={title} 
            className={styles.singleCardImage}
        />
     </Link>
 )   
 
}
export default SingleCard;  