import axios from "axios";
import Swal from "sweetalert2";

axios.interceptors.request.use(
    (config) => {
        const loader = document.getElementById('loader');
        loader.classList.remove("d-none");

        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = token;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        const loader = document.getElementById('loader');
        loader.classList.add("d-none");

        if (response.data.status === 401) {
            handleSessionExpiry();
        }

        return response;
    },
    (error) => {
        const loader = document.getElementById('loader');
        loader.classList.add("d-none");

        if (error.response) {
            console.log(error.response.status);
            handleErrorResponse(error.response);
        }

        return Promise.reject(error);
    }
);

const handleSessionExpiry = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    localStorage.removeItem("bankOfficerInfo");
    Swal.fire("Error", "Your session has expired", "error");
    setTimeout(() => { window.location.reload() }, 800);
};

const handleErrorResponse = (response) => {
    return;
    if (response.status === 401) {
        handleSessionExpiry();
    } else if (response.status === 403) {
        Swal.fire("Error", "Sorry! You are not authorized to perform this action", "error");
        axios.get(`${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_PROFILE_URL}`)
            .then((responseUser) => {
                localStorage.removeItem("userData");
                localStorage.setItem("user", JSON.stringify(responseUser.data.data));
            })
            .catch((err) => {
                console.log(err);
            });
    }
};

export default axios;