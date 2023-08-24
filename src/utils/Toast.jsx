import { toast } from "react-toastify"

export const getMessage = (type, text) => {
    switch (type) {
        case 'success':
            toast.success(
                `${text}`,
                {
                    autoClose: 2000,
                    position: 'bottom-right'
                }
            )
            break
        case 'error':
            toast.error(
                `${text}`,
                {
                    autoClose: 2000,
                    position: 'bottom-right'
                }
            )
            break
    }
}