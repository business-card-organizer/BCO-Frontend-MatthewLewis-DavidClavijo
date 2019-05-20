

const initialState = {
  user: {
    id: null,
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    Organization: "",
    job_title: "",
    email: "",
    phone: "",
    qr_code: ""
  },
  isLoading: false,
  error: ""
};


function reducer(state = initialState, action) {
    switch (action.type) {
        default: return state;
    }
}

export default reducer;