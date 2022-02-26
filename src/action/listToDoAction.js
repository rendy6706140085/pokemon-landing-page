import axios from "axios";

export const GET_TODO_LIST = "GET_TODO_LIST";
export const GET_TODO_LIST_DETAIL = "GET_TODO_LIST_DETAIL";
export const POST_TODO_LIST = "POST_TODO_LIST";
export const PUT_TODO_LIST = "PUT_TODO_LIST";

export const getTodoList = () => {
  return (dispatch) => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then(function (response) {
        dispatch({
          type: GET_TODO_LIST,
          payload: {
            data: response.data.results,
            isLoaded: true,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_TODO_LIST,
          payload: {
            data: false,
            isLoaded: true,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getTodoListDetail = (id) => {
  return (dispatch) => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + id)
      .then(function (response) {
        dispatch({
          type: GET_TODO_LIST_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_TODO_LIST_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};


export const deleteTempTodoList = () => {
  return (dispatch) => {
    dispatch({
      type: GET_TODO_LIST_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};
