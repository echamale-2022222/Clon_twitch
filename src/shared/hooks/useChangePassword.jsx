import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { changePassword as changePasswordRequest } from '../../services/api'
import toast from 'react-hot-toast'

export const useChangePassword = () => {
   const changePassword = async (password, newPassword) => {
      const responseData = await changePasswordRequest({ password, newPassword })

      if (responseData.error) {
         return toast.error(
            response.e?.response?.data || 'Ocurrió un error al cambiar la contraseña'
         )
      }

      toast.success('Contraseña cambiada exitosamente')
    }
    return {
        changePassword
    } 
}