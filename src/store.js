import { writable } from 'svelte/store'

const dateFormat = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/

// JSON has no date type, we need to desrialize manually
function dateParser(key, val) {
  if (typeof val === 'string' && dateFormat.test(val)) {
    return new Date(val)
  }
  return val
}

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
  const storedReadings = JSON.parse(localStorage.getItem(key), dateParser)
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
