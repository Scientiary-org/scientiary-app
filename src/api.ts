import axios from "axios"
import { IP } from "./entities/IP"

export const api = axios.create(
    {
    baseURL: `http://${IP}:3333`,
    }
)