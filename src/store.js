import { writable } from 'svelte/store'

function createUtilities() {
  const key = 'utilities'
  const storedUtilities = JSON.parse(localStorage.getItem(key))
  const { subscribe, set, update } = writable(storedUtilities || [])

  return {
    subscribe,
    set: (utilities) => {
      localStorage.setItem(key, JSON.stringify(utilities))
      set(utilities)
    }
  }
}

function createReadings() {
  const key = 'readings'
  const storedReadings = JSON.parse(localStorage.getItem(key))
  const { subscribe, set, update } = writable(storedReadings || [])

  return {
    subscribe,
    set: (readings) => {
      localStorage.setItem(key, JSON.stringify(readings))
      set(readings)
    }
  }
}

export const utilities = createUtilities()
export const readings = createReadings()
