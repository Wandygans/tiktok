import { MusicalDown } from "./downloader_musicaldown"
import { SSSTik } from "./downloader_ssstik"
import { TiktokAPI } from "./downloader_tiktokApi"

/** Types */
import { MusicalDownResponse } from "../types/musicaldown"
import { SSSTikResponse } from "../types/ssstik"
import { TiktokAPIResponse } from "../types/tiktokApi"

export async function TiktokDL(url){
        const response: MusicalDownResponse = await MusicalDown(url)
        return response
}
