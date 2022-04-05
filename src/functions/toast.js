import toast from 'react-hot-toast'

export async function sendToast(func, text) {
    await toast.promise(func, {       
        loading: text,
        success: `Success`,
        error: `Failed`,
    })
}
