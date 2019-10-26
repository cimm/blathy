import { writable } from 'svelte/store'

export const readings = writable([])

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

export const utilities = createUtilities()
