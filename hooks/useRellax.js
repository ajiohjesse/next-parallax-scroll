import { useEffect } from 'react'
import Rellax from 'rellax'

function useRellax() {
  useEffect(() => {
    new Rellax('.rellax', {
      horizontal: true,
    })
  }, [])
}

export default useRellax
