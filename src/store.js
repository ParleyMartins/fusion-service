import Vue from 'vue';
import Vuex from 'vuex';
import _axios from 'axios';

const axios = _axios.create({ baseURL: process.env.VUE_APP_API_URL });

Vue.use(Vuex);
const emptyErrors = () => {
    return {
        firstname: null,
        lastname: null,
        emails: null,
        phones: null,
        birth_date: null,
    };
};

export default new Vuex.Store({
    state: {
        contacts: [],
        errors: emptyErrors(),
    },
    mutations: {
        setContacts(state, contacts) {
            state.contacts = contacts;
            state.errors = emptyErrors();
        },

        updateContact(state, contact) {
            state.contacts = state.contacts.map(_contact => (_contact.id === contact.id ? contact : _contact));
            state.errors = emptyErrors();
        },

        addContact(state, contact) {
            state.contacts.push(contact);
            state.errors = emptyErrors();
        },

        removeContact(state, id) {
            state.contacts = state.contacts.filter(contact => contact.id !== id);
            state.errors = emptyErrors();
        },

        showError(state, errors) {
            const newErrors = {};
            for (const key in errors) {
                const value = errors[key];
                newErrors[key] = Array.isArray(value) ? value[0] : value[0][0];
            }
            state.errors = { ...emptyErrors(), ...newErrors };
        },
    },
    actions: {
        fetchContacts({ commit }) {
            return new Promise((resolve, reject) => {
                axios
                    .get('/person/')
                    .then(({ data }) => {
                        commit('setContacts', data);
                        resolve(data);
                    })
                    .catch(err => {
                        commit('showError', err.response.data);
                    });
            });
        },

        updateContact({ commit }, contact) {
            return new Promise((resolve, reject) => {
                axios
                    .patch(`/person/${contact.id}/`, contact)
                    .then(({ data }) => {
                        commit('updateContact', data);
                        resolve(data);
                    })
                    .catch(err => {
                        commit('showError', err.response.data);
                    });
            });
        },

        createContact({ commit }, contact) {
            return new Promise((resolve, reject) => {
                axios
                    .post(`/person/`, contact)
                    .then(({ data }) => {
                        commit('addContact', data);
                        resolve(data);
                    })
                    .catch(err => {
                        commit('showError', err.response.data);
                    });
            });
        },
        deleteContact({ commit }, id) {
            return new Promise((resolve, reject) => {
                axios
                    .delete(`/person/${id}`)
                    .then(({ data }) => {
                        commit('removeContact', id);
                        resolve(data);
                    })
                    .catch(err => {
                        commit('showError', err.response.data);
                    });
            });
        },
    },
});
