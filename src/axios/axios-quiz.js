import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-88c9e.firebaseio.com/'
})