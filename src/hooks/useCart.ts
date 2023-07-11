import { SneakerType } from '@/types/SneakerType'
import { useEffect, useState } from 'react'

const useCart = () => {
  const [cartItemsQtd, setCartItemsQtd] = useState(0)

  useEffect(() => {
    const getQtd = localStorage.getItem('cart') || 0

    if (typeof getQtd === 'string') {
      const parsed = JSON.parse(getQtd)
      setCartItemsQtd(parsed.length)
    }
  }, [])

  const addToCart = ({ name, id, estimatedMarketValue, image }: SneakerType) => {
    const oldCartItems: string | SneakerType[] = localStorage.getItem('cart') || []

    if (typeof oldCartItems === 'string') {
      let parsed = JSON.parse(oldCartItems)

      if (parsed.some((snk: SneakerType) => snk.id === id)) {
        const getSneaker = parsed.filter((snk: SneakerType) => snk.id === id)
        getSneaker[0].quantity = getSneaker[0].quantity + 1

        parsed = parsed.filter((snk: SneakerType) => snk.id !== id)
        parsed.push(getSneaker[0])
      } else {
        parsed.push({ name, id, estimatedMarketValue, image, quantity: 1 })
      }

      setCartItemsQtd(parsed.length)
      console.log(cartItemsQtd)
      localStorage.setItem('cart', JSON.stringify(parsed))
    } else {
      oldCartItems.push({ name, id, estimatedMarketValue, image, quantity: 1 })

      setCartItemsQtd(oldCartItems.length)
      console.log(cartItemsQtd)
      localStorage.setItem('cart', JSON.stringify(oldCartItems))
    }
  }

  return {
    cartItemsQtd,
    addToCart
  }
}

export default useCart