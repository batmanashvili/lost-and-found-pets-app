

export const signUp = (email, password) => {
    return async dispatch => {
        debugger
        
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyCMCH-brUV4-ltdKG3MYL0u7whCLp-p7Dc',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stirnigy({
                email: email,
                password: password,
                returnSecureToken: true,
            })
        })

        if(!repsonse.ok){
            throw new Error(response.message)
        }

        const resData = await response.json()
        console.log(resData)

        dispatch({ type: 'SIGNUP', payload: null})
    }
}



export const signIn = (email, password) => {
    return async dispatch => {
        console.log(email, 'email')
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyCMCH-brUV4-ltdKG3MYL0u7whCLp-p7Dc',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stirnigy({
                email: email,
                password: password,
                returnSecureToken: true,
            })
        })

        if(!repsonse.ok){
            throw new Error(response.message)
        }

        const resData = await response.json()

        console.log(resData)

        dispatch({ type: 'SIGNIN', payload: resData})

    }
}


