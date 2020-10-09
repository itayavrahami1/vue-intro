import { storageService } from './storageService.js'

export const userService = {
    query,
    save,
    remove,
    getById,
    getEmptyUser
}

var gDefaultUsers = [
    { _id: 'i101', name: 'Brian', imgUrl: 'https://api.adorable.io/avatars/120/Brian.png'},
    { _id: 'i102', name: 'groovyUser', imgUrl: 'https://api.adorable.io/avatars/120/groovyUser.png' },
    { _id: 'i103', name: 'Parents', imgUrl: 'https://api.adorable.io/avatars/120/Parents.png' },
    { _id: 'i104', name: 'Walt Jr.', imgUrl: 'https://api.adorable.io/avatars/120/Walt_Jr..png' },
    { _id: 'i105', name: 'For the Kids', imgUrl: 'https://api.adorable.io/avatars/120/Kids.png' }
]

const STORAGE_KEY = 'users'
const gUsers = _loadUsers()

function query(filterBy) {
    let usersToReturn = gUsers;
    return Promise.resolve([...usersToReturn]);
}

function getById(id) {
    const user = gUsers.find(user => user._id === id)
    return Promise.resolve(user)
}

function remove(id) {
    const idx = gUsers.findIndex(user => user._id === id)
    gUsers.splice(idx, 1)
    storageService.saveToStorage(STORAGE_KEY, gUsers)
    return Promise.resolve()
}

function save(userToSave) {
    if (userToSave._id) {
        const idx = gUsers.findIndex(user => user._id === userToSave._id)
        gUsers.splice(idx, 1, userToSave)

    } else {
        userToSave._id = _makeId()
        userToSave.imgUrl = `https://api.adorable.io/avatars/120/${userToSave.name}.png`
        gUsers.push(userToSave)
    }
    storageService.saveToStorage(STORAGE_KEY, gUsers)
    return Promise.resolve(userToSave);
}
function getEmptyUser() {
    return Promise.resolve({
        name: '',
    })
}
function _loadUsers() {
    let users = storageService.loadFromStorage(STORAGE_KEY)
    if (!users || !users.length) users = gDefaultUsers
    storageService.saveToStorage(STORAGE_KEY, users)
    return users
}

function _makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
