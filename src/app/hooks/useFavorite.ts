import { useState } from "react"
import { SneakerType } from "../types/SneakerType"

const useFavorite = () => {
  const [isFavorite, setIsFavorite] = useState(false)

  const addToFavorites = ({ name, id, estimatedMarketValue, image }: SneakerType) => {
    if (!isFavorite) {
      setIsFavorite(true)
      const oldFavorites = (localStorage.getItem('favorite-sneakers'))
      let parsed = []

      if (typeof oldFavorites === 'string') {
        parsed = JSON.parse(oldFavorites)
      }

      parsed.push({ name, id, estimatedMarketValue, image })

      localStorage.setItem('favorite-sneakers', JSON.stringify(parsed))
    } else {
      setIsFavorite(false)
      const oldFavorites = (localStorage.getItem('favorite-sneakers'))
      let parsed = []

      if (typeof oldFavorites === 'string') {
        parsed = JSON.parse(oldFavorites).filter((sneaker: SneakerType) => sneaker.id !== id)
      }

      localStorage.setItem('favorite-sneakers', JSON.stringify(parsed))
    }
  }

  return {
    isFavorite,
    setIsFavorite,
    addToFavorites
  }
}

export default useFavorite