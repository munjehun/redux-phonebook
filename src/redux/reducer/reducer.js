let initialState = {
  contactList: [],
};

function reducer(state = initialState, action) {
  const { type, payload } = action; //객체 desructuring 문법

  if (type === "ADD_CONTACT") {
    return {
      ...state,
      contactList: [
        ...state.contactList,
        { name: payload.name, number: payload.number }, //새로운 객체의 형태로 배열에 들어감
      ],
    };
  }

  return { ...state };
}

export default reducer;
