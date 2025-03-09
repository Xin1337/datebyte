'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const HeartBackground = () => {
  const [hearts, setHearts] = useState<Array<{x: number, y: number, scale: number, duration: number}>>([])

  useEffect(() => {
    const newHearts = Array(30).fill(null).map(() => ({
      x: Math.random() * window.innerWidth,
      y: window.innerHeight + 100,
      scale: Math.random() * 0.5 + 0.5,
      duration: Math.random() * 20 + 10
    }))
    setHearts(newHearts)
  }, [])

  if (hearts.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300"
          initial={{ 
            x: heart.x,
            y: heart.y,
            scale: heart.scale
          }}
          animate={{
            y: -100,
            transition: {
              duration: heart.duration,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        >
          <Heart size={24} fill="currentColor" />
        </motion.div>
      ))}
    </div>
  )
}

export default HeartBackground
