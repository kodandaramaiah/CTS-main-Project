import Item1 from "../../images/item1.jpg";
import Item2 from "../../images/item2.jpg";
import Item3 from "../../images/item3.jpg";
import Item4 from "../../images/item4.jpg";
import Item5 from "../../images/item5.jpg";
import Item6 from "../../images/item6.jpg";
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_SHIPPING,
} from "../actions/action-types/cart-actions";

const initState = {
  items: [
    {
      id: 1,
      title: "Self Study Guide Clat 2020 ",
      desc:
        "CLAT (Common Law Admission Test) is an All India entrance examination and conducted by the National Law Schools/Universities for the admission in the Under-graduate and Post- graduate programmes.",
      price: 392,
      img: Item1,
    },
    {
      id: 2,
      title: "Quantitative Aptitude for Competitive Examinations ",
      desc:
        "This is very comprehensive and detailed with lot of solve examples and unsolved exercises with latest pattern.",
      price: 80,
      img: Item2,
    },
    {
      id: 3,
      title: "Word Power Made Easy",
      desc:
        "With an extensive repertoire of mental workouts to develop the subtle nuance of English grammar and build upon an enriched network of vocabulary, this book brings together a succinct narrative to engage readers with the sole purpose of enhancing the use of words",
      price: 120,
      img: Item3,
    },
    {
      id: 4,
      title: "IIT Jee Mathematics",
      desc:
        "Nitin Singhania is an IAS officer of 2013 batch in West Bengal Cadre and is presently posted as Joint Secretary under Government of West Bengal. He is a graduate and post graduate in Economics from Presidency College, Kolkata and is also a Chartered Accountant and Company Secretary. Earlier he has worked as Assistant Secretary in Ministry of Home Affairs, Government of India, and as Sub-Divisional Magistrate in Purba Bardhaman district",
      price: 260,
      img: Item4,
    },
    {
      id: 5,
      title: "IIT Jee Mathematics ",
      desc:
        "because,it is fullfill with last 41 que.papers with their solution...so it is easy to study and delivery is also best means packegingand behavior of delivery boy is also respectful with customer",
      price: 160,
      img: Item5,
    },
    {
      id: 6,
      title: "IIT Jee Chemistry ",
      desc:
        "A series of lectures made by Stephen Hawking in 1990s has been put together in the brilliant work called The Theory Of Everything which deals with all things Physics and more.",
      price: 90,
      img: Item6,
    },
  ],
  addedItems: [],
  total: 0,
};
const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find((item) => action.id === item.id);
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.price,
      };
    } else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find((item) => action.id === item.id);
    let new_items = state.addedItems.filter((item) => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return {
      ...state,
      total: newTotal,
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter((item) => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return {
        ...state,
        total: newTotal,
      };
    }
  }

  if (action.type === ADD_SHIPPING) {
    return {
      ...state,
      total: state.total + 6,
    };
  }

  if (action.type === "SUB_SHIPPING") {
    return {
      ...state,
      total: state.total - 6,
    };
  } else {
    return state;
  }
};

export default cartReducer;
