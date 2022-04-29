import { createStore } from "vuex";

export default createStore({
  state: {
    accessToken: "",
    refreshToken: "",
    user: null,
  },
  getters: {},
  mutations: {
    setAccessToken(state, accessToken) {
      state.accessToken = accessToken;
    },
    setRefreshToken(state, refreshToken) {
      state.refreshToken = refreshToken;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    login({ commit }, { username, password }) {
      const urlEncoded = new URLSearchParams();
      urlEncoded.append("client_id", "boxinator-vue-app");
      urlEncoded.append("username", username);
      urlEncoded.append("password", password);
      urlEncoded.append("grant_type", "password");

      const requestOptions = {
        method: "POST",
        body: urlEncoded,
        redirect: "follow",
      };

      fetch(
        "https://boxinator-app-keycloak.herokuapp.com/auth/realms/boxinator/protocol/openid-connect/token",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          const decodedToken = JSON.parse(
            window.atob(data.access_token.split(".")[1])
          );
          const user = {
            id: decodedToken.sub,
            firstName: decodedToken.given_name,
            lastName: decodedToken.family_name,
            email: decodedToken.email,
            dateOfBirth: decodedToken.date_of_birth,
            countryOfResidence: decodedToken.country_of_residence,
            postalCode: decodedToken.postal_code,
            contactNumber: decodedToken.contact_number,
            accountType: decodedToken.roles[0],
          };
          commit("setAccessToken", data.access_token);
          commit("setRefreshToken", data.refresh_token);
          commit("setUser", user);
        })
        .catch((error) => console.log(error));
    },
    logout({ commit }, { accessToken, refreshToken }) {
      const urlEncoded = new URLSearchParams();
      urlEncoded.append("client_id", "boxinator-vue-app");
      urlEncoded.append("refresh_token", refreshToken);

      const headers = new Headers();
      headers.append("Authorization", `Bearer ${accessToken}`);

      const requestOptions = {
        method: "POST",
        body: urlEncoded,
        headers,
        redirect: "follow",
      };

      fetch(
        "https://boxinator-app-keycloak.herokuapp.com/auth/realms/boxinator/protocol/openid-connect/logout",
        requestOptions
      )
        .then(() => {
          commit("setAccessToken", "");
          commit("setRefreshToken", "");
          commit("setUser", null);
        })
        .catch((error) => console.log(error));
    },
  },
  modules: {},
});
