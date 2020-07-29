import Request from './request'

export function getCity() {
    return Request('/getCity',{},'get')
}