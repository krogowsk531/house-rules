import styles from './SingleCard.module.css'
import Link from 'next/link'

const SingleCard = ({image, title, id, key}) => {
  return(
    <Link
      name={title}
      href={{
        pathname: '/GameDetails/[gameid]',
        query: { gameid: id }
      }}
      key={id}>
        <img
          src={image}
          alt={title}
          className={styles.singleCardImage}
        />
    </Link>
  )
}
export default SingleCard;
