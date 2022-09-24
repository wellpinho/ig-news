import { NextApiRequest, NextApiResponse } from "next";

const users = (request: NextApiRequest, response: NextApiResponse) => {
  const id = request.query;

  const users = [
    {
      id: 1,
      name: "Wellington",
    },
    {
      id: 2,
      name: "Mary",
    },
    {
      id: 3,
      name: "Raica",
    },
    {
      id: 4,
      name: "Wendell",
    },
  ];

  return response.json(users);
};

export default users;
