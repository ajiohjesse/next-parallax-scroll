import { useState, useEffect } from 'react'

function useIPAddress() {
  const [ipAddress, setIPAddress] = useState('')

  useEffect(() => {
    async function fetchIPAddress() {
      const response = await fetch('https://api.ipify.org?format=json')
      const data = await response.json()
      setIPAddress(data.ip)
    }
    fetchIPAddress()
  }, [])

  return ipAddress
}

export default useIPAddress
