import styles from '../styles/scene.module.css'
import { cl } from './test'
import useRellax from '../hooks/useRellax'
import useRellaxConfig from '../hooks/useRellaxConfig'
import Image from 'next/image'
import bg from '../public/scene/Asset5.svg'
import moon from '../public/scene/Asset4.svg'
import mountain from '../public/scene/Asset3.svg'
import trees from '../public/scene/Asset2.svg'
import boat from '../public/scene/Asset1.svg'

function Scene() {
  useRellax()

  return (
    <>
      <div className={styles.wrapper}>
        <Image src={bg} className={cl(styles.fixed, styles.bg)} />
        <Image
          src={moon}
          className={cl(styles.fixed, styles.moon)}
          data-rellax-speed="-7"
        />
        <Image
          src={mountain}
          className={cl(styles.fixed, styles.mountain)}
          data-rellax-speed="-6"
        />
        <div
          className={cl(styles.bg2, styles.fixed)}
          data-rellax-speed="-6"
        ></div>
        <Image
          src={trees}
          className={cl(styles.fixed, styles.trees)}
          data-rellax-speed="-8"
        />
        <Image
          src={boat}
          className={cl(styles.fixed, styles.boat)}
          data-rellax-speed="-4"
        />
      </div>
      <div className={styles.content}></div>
    </>
  )
}

export default Scene
