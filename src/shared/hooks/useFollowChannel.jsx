import toast from "react-hot-toast"
import { followChannel as followChannelRequest } from "../../services/"
 
export const useFollowChannel = () => {
    const followChannel = async (channelId, onSucess) => {
        const responseData = await followChannelRequest(channelId)
 
        if(responseData.error) {
            return toast.error (
                responseData.e?.response?.data || 'Ocurrió un error al seguir el canal'
            )
        }
 
        toast.success('Channel followed successfully')
 
        onSucess(true)
    }
    return {
        followChannel
    }
}