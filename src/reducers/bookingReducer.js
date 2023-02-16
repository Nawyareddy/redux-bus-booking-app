const intialState = {
  buses: [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      service: "APSRTC",
      rating: "4.5"
    },
    {
      id: 2,
      imageUrl:
        "https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      service: "TSRTC",
      rating: "4.4"
    },
    {
      id: 3,
      imageUrl:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      service: "PrivateServices",
      rating: "4.2"
    }
  ],
  serviceType: [
    {
      id: 1,
      service: "APSRTC",
      imageUrl:
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      startPoint: "Chittor",
      destination: "Bangalore",
      type: "Semi-sleeper AC",
      fare: 600,
      seatsAvailable: 12
    },
    {
      id: 2,
      service: "APSRTC",
      imageUrl:
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      startPoint: "Tirupati",
      destination: "Chennai",
      type: "Sleeper AC",
      fare: 1200,
      seatsAvailable: 21
    },
    {
      id: 3,
      service: "APSRTC",
      imageUrl:
        "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      startPoint: "Tirupati",
      destination: "Vijayawada",
      type: "Sleeper AC",
      fare: 2200,
      seatsAvailable: 25
    },
    {
      id: 4,
      service: "TSRTC",
      imageUrl:
        "https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      startPoint: "Hyderabad",
      destination: "Bangalore",
      type: "Semi-sleeper AC",
      fare: 600,
      seatsAvailable: 12
    },
    {
      id: 5,
      service: "TSRTC",
      imageUrl:
        "https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      startPoint: "Hyderabd",
      destination: "Chennai",
      type: "Sleeper AC",
      fare: 1200,
      seatsAvailable: 21
    },
    {
      id: 6,
      service: "TSRTC",
      imageUrl:
        "https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
      startPoint: "Hyderabd",
      destination: "Mumbai",
      type: "Sleeper AC",
      fare: 2200,
      seatsAvailable: 25
    },
    {
      id: 7,
      imageUrl:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      service: "PrivateServices",
      startPoint: "Hyderabd",
      destination: "Mumbai",
      type: "Sleeper AC",
      fare: 2200,
      seatsAvailable: 25
    },
    {
      id: 8,
      imageUrl:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      service: "PrivateServices",
      startPoint: "Mumbai",
      destination: "Hyderabad",
      type: "Sleeper AC",
      fare: 1300,
      seatsAvailable: 25
    },
    {
      id: 9,
      imageUrl:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YnVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
      service: "PrivateServices",
      startPoint: "Chennai",
      destination: "Delhi",
      type: "Sleeper AC",
      fare: 2200,
      seatsAvailable: 25
    }
  ],
  bookingHistory: []
};

const bookingReducer = (state = intialState, action) => {
  switch (action.type) {
    case "GET_SERVICES":
      return {
        ...state
      };

    case "GET_SERVICES_BY_TYPE":
      return {
        ...state,
        serviceType: action.payload
      };

    // case "GET_ALL_SERVICES":
    //   return {
    //     ...state,
    //     serviceType: intialState.serviceType
    //   };

    case "ADD_BOOKING_HISTORY":
      return {
        ...state,
        bookingHistory: [...state.bookingHistory, action.payload]
      };
    case "GET_BOOKING_DETAILS":
      return {
        ...state,
        bookingHistory: state.bookingHistory
      };

    default:
      return state;
  }
};

export default bookingReducer;
