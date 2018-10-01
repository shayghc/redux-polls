export const RECEIVE_USERS = 'RECEIVE_USERS'

export function receiveUSers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}