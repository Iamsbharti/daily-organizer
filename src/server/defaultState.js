import md5 from "md5";
export const defaultState = {
  /*session: {
    authenticated: false,
  },*/
  users: [
    {
      id: "U1",
      name: "Dev",
      passwordHash: md5("Life42"),
    },
    {
      id: "U2",
      name: "Aeat",
      passwordHash: md5("Zphaod"),
    },
  ],
  groups: [
    {
      name: "To Do",
      id: "G1",
      owner: "U1",
    },
    {
      name: "Doing",
      id: "G2",
      owner: "U1",
    },
    {
      name: "Done",
      id: "G3",
      owner: "U1",
    },
  ],
  tasks: [
    {
      name: "Do Tests",
      id: "T1",
      group: "G1",
      owner: "U1",
      isComplete: false,
    },
    {
      name: "Refactor Code",
      id: "T2",
      group: "G2",
      owner: "U1",
      isComplete: false,
    },
    {
      name: "Solve Problems",
      id: "T3",
      group: "G3",
      owner: "U1",
      isComplete: true,
    },
    {
      name: "Update component snapshots",
      id: "T4",
      group: "G2",
      owner: "U1",
      isComplete: true,
    },
    {
      name: "Production optimizations",
      id: "T5",
      group: "G3",
      owner: "U1",
      isComplete: true,
    },
  ],
  comments: [
    {
      owner: "U1",
      id: "C1",
      task: "T1",
      content: "Great Work!",
    },
  ],
};
