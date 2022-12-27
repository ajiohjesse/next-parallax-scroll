import styles from '../styles/test.module.css'
import Image from 'next/image'
import asset1 from '../public/SVG/Asset1.svg'
import asset2 from '../public/SVG/Asset2.svg'
import asset3 from '../public/SVG/Asset5.svg'
import asset4 from '../public/SVG/Asset6.svg'
import asset5 from '../public/SVG/Asset7.svg'
import asset6 from '../public/SVG/Asset8.svg'
import sun from '../public/SVG/sun.svg'
import useRellax from '../hooks/useRellax'

const cl = (...args) => {
  return [...args, 'rellax'].join(' ')
}

function Test() {
  useRellax()

  return (
    <div className={styles.wrapper}>
      <Image src={asset1} className={styles.sixth} />
      <Image src={sun} className={cl(styles.sun)} data-rellax-speed="-10" />
      <Image src={asset2} className={cl(styles.fifth)} data-rellax-speed="-2" />
      <Image
        src={asset3}
        className={cl(styles.fourth)}
        data-rellax-speed="-3"
      />
      <Image src={asset4} className={cl(styles.third)} data-rellax-speed="-4" />
      <Image
        src={asset5}
        className={cl(styles.second)}
        data-rellax-speed="-5"
      />
      <Image src={asset6} className={styles.first} />
    </div>
  )
}

export default Test
