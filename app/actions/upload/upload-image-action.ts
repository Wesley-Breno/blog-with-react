'use server'

import { logColor } from "@/app/utils/log-color"

export async function uploadImageAction() {
    logColor("Ola da action uploadImageAction", "green")

    return {
        user: "SENHA DO USUARIO"
    }
}