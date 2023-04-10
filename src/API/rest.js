const apiUrl = 'http://localhost:8080'
const role = 'PATIENT'

const rest = {
    login (data) {
        let headers = new Headers()
        headers.append('Content-Type', 'application/json')
        const requestOptions = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        }
        return fetch(apiUrl + '/auth/login/' + role, requestOptions);
    },

    getUser (userMail) {
        const requestOptions = {
            method: 'GET',
        }
        return fetch(apiUrl + '/patients/' + userMail, requestOptions);
    },

    getDoctor (doctorMail) {
        const requestOptions = {
            method: 'GET',
        }
        return fetch(apiUrl + '/medecins/' + doctorMail, requestOptions);
    },

    getDoctors () {
        const requestOptions = {
            method: 'GET',
        }
        return fetch(apiUrl + '/medecins/all', requestOptions);
    },

    getPathoUser (userMail) {
        const requestOptions = {
            method: 'GET',
        }
        return fetch(apiUrl + '/pathologie/' + userMail, requestOptions);
    },

    getConstancies (userMail, patho, date) {
        const requestOptions = {
            method: 'GET',
        }
        return fetch(apiUrl + '/mesure/mesuresPatientAvecPathalogie/' + userMail + `/${patho}/${date}/${date}`, requestOptions);
    }
}

export default rest