import * as types from './actionTypes';
import AxiosAuth from "../axios/AxiosAuth";


const splitsApi = 'https://split-the-bill-api.herokuapp.com/api/users/profile';
const usersApi = 'https://split-the-bill-api.herokuapp.com/api/users';
const userDetailsApi = 'https://split-the-bill-api.herokuapp.com/api/users/profile';
const usersPromise = AxiosAuth().get(usersApi);
const userDetailsPromise = AxiosAuth().get(userDetailsApi);

export const addUsers = (users) => ({
    type: types.ADD_USERS,
    payload: users,
})

export const currentUser = (user) => ({
    type: types.ADD_CURRENT_USER,
    payload: user,
})

export const getUserAndUsers = () => dispatch => {
    Promise
        .all([userDetailsPromise, usersPromise])
        .then(response => {
            const userDetails = response[0].data.user;
            const users = response[1].data.users;
            dispatch(currentUser(userDetails))
            dispatch(addUsers(users))
            dispatch(getOwingTotal(userDetails))        
            dispatch(getOwedTotal(userDetails))            
            dispatch(getPeopleOwingMe(userDetails, users))
            dispatch(getPeopleIOwe(userDetails, users))
        })
        .catch(error => {
            alert(error.message)
        });
}

// export const getUsers = () => dispatch => {
//     AxiosAuth().get('https://split-the-bill-api.herokuapp.com/api/users')
//     .then(res => {
//         dispatch(addUsers(res.data.users))
//     })
//     .catch(err => console.log(err))
// }

// export const getUserDetails = () => dispatch => {
//     AxiosAuth().get('https://split-the-bill-api.herokuapp.com/api/users/profile')
//         .then(res => {
//             debugger
//         dispatch(currentUser(res.data.user))        
//         dispatch(getOwingTotal(res.data.user))        
//         dispatch(getOwedTotal(res.data.user))        
//     })
//     .catch(err => console.log(err))
// }

export const getSplits = () => dispatch => {
    AxiosAuth().get(splitsApi)
        .then(res => {
            const splitsAray = res.data.user.splits;
            dispatch({type: types.ADD_SPLITS, payload: splitsAray});
        })
        .catch(error => {
            console.log(error.message);
        })
}

export const getBills = () => dispatch => {
    AxiosAuth().get(splitsApi)
        .then(res => {
            const splitsAray = res.data.user.bills;
            dispatch({type: types.ADD_BILLS, payload: splitsAray});
        })
        .catch(error => {
            console.log(error.message);
        })
}

export const getOwingTotal = user => dispatch => {
    const debts = user.splits;
    const owing = (debts.reduce((accum, bill) => accum + Number(bill.amount) - Number(bill.amountPaid), 0)).toFixed(2)
    dispatch({type: types.SET_OWING_AMOUNT,
    payload: owing})
}

export const getOwedTotal = user => dispatch => {
    const bills = user.bills;
    let amountOwed = [];
    let owed;
    //Iterating through the bills array
    bills.forEach(bill => {
    //filtering the splits to remove those that belong to current user
    const cred = bill.splits.filter(split => split.userId !== user.id);
    //reducing each splits and pushing into amountOwed array    
    amountOwed.push(cred.reduce((accum, cred) => accum + Number(cred.amount), 0));
    //reducing the amountOwed which consists of all the splits in bills array    
    owed = amountOwed.reduce((accum, owe) => accum + owe, 0); })
    dispatch({type: types.SET_OWED_AMOUNT,
    payload: owed,})
}

export const getPeopleOwingMe = (user, users) => dispatch => {
    const bills = user.bills;
    let peopleOwingMe = [];
    bills.forEach(bill => {
        const filteredSplits = bill.splits.filter(split => split.userId !== user.id);
        filteredSplits.forEach(split => {
        users.forEach(user => {
            if (user.id === split.userId) {
            peopleOwingMe.push(`${user.firstName}, ${split.amount} for ${bill.title}`)
            }
        })
        })
    })
    dispatch({type: types.SET_PEOPLE_OWING_ME,
    payload: { title: 'People Owing Me', list: peopleOwingMe} })   
}

export const getPeopleIOwe = (user, users) => dispatch => {
    const debts = user.splits;
    let peopleIOwe = [];
    debts.forEach(debt => {
        users.forEach(user => {
        if (user.id === debt.bill.userId) {    
            peopleIOwe.push(`${user.firstName}, ${debt.bill.amount} for ${debt.bill.title}`)
        }
        })    
    })
    dispatch({type: types.SET_PEOPLE_I_OWE,
    payload: { title: "People I'm Owing", list: peopleIOwe}}) 
}

export const setListToOwed = () => ({
    type: types.SET_LIST_OWED
})

export const setListOwing = () => ({
    type: types.SET_LIST_OWING
})