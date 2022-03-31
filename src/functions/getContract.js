import { ethers } from 'ethers'

export function getSigner(library, account){
    return library.getSigner(account).connectUnchecked()
}

export function getProviderOrSigner(library, account){
    return account ? getSigner(library, account)  : library
}

export function getContract(address, ABI, library, account){

    try {        
        if (!ethers.utils.getAddress(address) || address === ethers.constants.AddressZero ) {
            throw Error(`Invalid 'address' parameter '${address}'.`)
        }
    } catch {
        throw Error(`Invalid 'address' parameter '${address}'.`)
    }
    
    return new ethers.Contract(address, ABI, getProviderOrSigner(library, account))
}
