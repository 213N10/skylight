import { atom } from 'recoil'

export interface Location {
  lng: number
  lat: number
}

export const locationState = atom<Location | null>({
  key: 'locationState',
  default: null
})