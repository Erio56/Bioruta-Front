import { Material } from "./material"

export interface PickUp {
   address?: string,
   state: string,
   timeToPickUp: string,
   requestedDate: string,
   materials: Material[]
}