import Subscriber from "../../../src/models/Subscriber";
import { ucFirst } from "../../../src/utils";

export default async (req, res) => {
  try {
    var { data } = await fetch("https://dummyapi.io/data/api/user?limit=50", {
      headers: {
        "app-id": "60cf03b08eb6a1260f81ff55",
      },
    }).then((response) => response.json());

    data = data.map((user) => ({
      ...user,
      name: `${ucFirst(user.title)}. ${user.firstName} ${user.lastName}`,
      registeredAt: Date.now(),
      subscriptions: [],
      payments: [],
    }));

    console.log(data);
    var resut = await Subscriber.insertMany(data);

    return res.send({
      success: true,
      resut,
    });
  } catch (error) {
    console.error(error);
    res.status(501).send({
      error: true,
      message: error.message,
    });
  }
};