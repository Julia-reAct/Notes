import axios from 'axios-typescript';

type User = {
    title: string;
    text: string;

};

export const api = {
    getNotes() {
        return axios.get<User>(``,
        )
            .then(response => response.data)
    },
    updateNote() {
        return axios.post<User>(``,
        )
    },
    putNote() {
        return axios.put<User>(``,
        )
    },
    deleteNote() {
        return axios.delete<User>(``,
        )
    },

}