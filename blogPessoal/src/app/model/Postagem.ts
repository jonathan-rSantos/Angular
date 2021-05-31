import { Tema } from "./Tema"
import { User } from "./User"

export class postagem{
    public id: number
    public titulo: string
    public text: string 
    public data: Date
    public usuario: User
    public tema: Tema
}