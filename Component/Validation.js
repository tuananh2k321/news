export const isValidPass = (stringPassword)  => {
    return (
        stringPassword.length >= 8
    )
}

export const isValidUsername = (stringUsername)  => {
    return (
        stringUsername.length > 0
    )
}