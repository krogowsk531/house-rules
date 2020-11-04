import styles from './SingleCard.module.css'
import Link from 'next/link'

const SingleCard = ({image, title, id, key, testid}) => {
  return(
        <Link
            href={{
                pathname: '/GameDetails/[gameid]',
                query: { gameid: id }
            }}
            key={id}>
            <img
                src={image}
                alt={title}
                className={styles.singleCardImage}
                testid={testid}
            />
        </Link>
    )

}
export default SingleCard;
