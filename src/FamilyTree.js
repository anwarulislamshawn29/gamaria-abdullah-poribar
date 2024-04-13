import React from "react";
import f3 from "family-chart";  // npm i family-chart
import './family-chart.css';  // create file 'family-chart.css' in same directory, copy/paste css from examples/create-tree

export default class FamilyTree extends React.Component {
  cont = React.createRef();

  componentDidMount() {
    if (!this.cont.current) return;
    
    const store = f3.createStore({
        data: data(),
        node_separation: 250,
        level_separation: 150
      }),
      view = f3.d3AnimationView({
        store,
        cont: document.querySelector("#FamilyChart")
      }),
      Card = f3.elements.Card({
        store,
        svg: view.svg,
        card_dim: {w:220,h:70,text_x:75,text_y:15,img_w:60,img_h:60,img_x:5,img_y:5},
        card_display: [d => `${d.data['first name'] || ''} ${d.data['last name'] || ''}`,d => `${d.data["birthday"]}`],
        mini_tree: true,
        link_break: false
      })
  
    view.setCard(Card)
    store.setOnUpdate(props => view.update(props || {}))
    store.update.tree({initial: true})
    
    function data() {
      return [
  {
    "id": "0",
    "rels": {
      "spouses": [
        "f16afb4f-2b49-4466-9aeb-4bb265c4ef87"
      ],
      "children": [
        "cb8ec1af-34ca-464f-9afa-1616f56e1b3a",
        "3eb2a6e1-fb15-4a87-bd11-2e3936cab2fa"
      ]
    },
    "data": {
      "first name": "Ronjon Bepari",
      "last name": "",
      "birthday": "",
      "avatar": "https://static8.depositphotos.com/1009634/988/v/950/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg",
      "gender": "M"
    }
  },
  {
    "id": "cb8ec1af-34ca-464f-9afa-1616f56e1b3a",
    "data": {
      "gender": "M",
      "first name": "Chan Bepari",
      "last name": "",
      "birthday": "",
      "avatar": "https://static8.depositphotos.com/1009634/988/v/950/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg"
    },
    "rels": {
      "mother": "f16afb4f-2b49-4466-9aeb-4bb265c4ef87",
      "father": "0",
      "spouses": [
        "3106e78b-cc51-4251-bd6f-100c1f118e8f"
      ],
      "children": [
        "c9b45e46-caf2-41b9-97f3-6db51d5c3901"
      ]
    }
  },
  {
    "id": "f16afb4f-2b49-4466-9aeb-4bb265c4ef87",
    "data": {
      "gender": "F",
      "first name": "Mrs. Ronjon Bepari",
      "last name": "",
      "birthday": "",
      "avatar": "https://static8.depositphotos.com/1009634/988/v/950/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg"
    },
    "rels": {
      "spouses": [
        "0"
      ],
      "children": [
        "cb8ec1af-34ca-464f-9afa-1616f56e1b3a",
        "3eb2a6e1-fb15-4a87-bd11-2e3936cab2fa"
      ]
    }
  },
  {
    "id": "3106e78b-cc51-4251-bd6f-100c1f118e8f",
    "data": {
      "gender": "F",
      "first name": "Mrs. Chan Bepari",
      "last name": "",
      "avatar": "https://static8.depositphotos.com/1009634/988/v/950/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg"
    },
    "rels": {
      "spouses": [
        "cb8ec1af-34ca-464f-9afa-1616f56e1b3a"
      ],
      "children": [
        "c9b45e46-caf2-41b9-97f3-6db51d5c3901"
      ]
    }
  },
  {
    "id": "3eb2a6e1-fb15-4a87-bd11-2e3936cab2fa",
    "data": {
      "gender": "M",
      "first name": "Toru Bepari",
      "last name": "",
      "avatar": "https://static8.depositphotos.com/1009634/988/v/950/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg"
    },
    "rels": {
      "mother": "f16afb4f-2b49-4466-9aeb-4bb265c4ef87",
      "father": "0",
      "spouses": [
        "71505ced-4747-4ef4-8881-3eff536f25e4"
      ]
    }
  },
  {
    "id": "71505ced-4747-4ef4-8881-3eff536f25e4",
    "data": {
      "gender": "F",
      "first name": "Wife of Toru Bepari",
      "last name": "",
      "avatar": "https://static8.depositphotos.com/1009634/988/v/950/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg"
    },
    "rels": {
      "spouses": [
        "3eb2a6e1-fb15-4a87-bd11-2e3936cab2fa"
      ]
    }
  },
  {
    "id": "c9b45e46-caf2-41b9-97f3-6db51d5c3901",
    "data": {
      "gender": "M",
      "first name": "ABDULLAH/ABDUL ALI",
      "last name": "",
      "avatar": "https://static8.depositphotos.com/1009634/988/v/950/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg"
    },
    "rels": {
      "mother": "3106e78b-cc51-4251-bd6f-100c1f118e8f",
      "father": "cb8ec1af-34ca-464f-9afa-1616f56e1b3a",
      "spouses": [
        "202de0ff-9c10-4e48-a040-c51cce52f976"
      ],
      "children": [
        "29deae8d-214e-457c-b344-93ebfa8c2c4c",
        "2f0c2ab0-acb5-4bea-be05-926c0ed084ab",
        "6b96979c-73ba-4aa9-90db-3e27b66ad77e"
      ]
    }
  },
  {
    "id": "202de0ff-9c10-4e48-a040-c51cce52f976",
    "data": {
      "gender": "F",
      "first name": "Mrs. Adbullah",
      "last name": "",
      "avatar": "https://static8.depositphotos.com/1009634/988/v/950/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg"
    },
    "rels": {
      "spouses": [
        "c9b45e46-caf2-41b9-97f3-6db51d5c3901"
      ],
      "children": [
        "29deae8d-214e-457c-b344-93ebfa8c2c4c",
        "2f0c2ab0-acb5-4bea-be05-926c0ed084ab",
        "6b96979c-73ba-4aa9-90db-3e27b66ad77e"
      ]
    }
  },
  {
    "id": "29deae8d-214e-457c-b344-93ebfa8c2c4c",
    "data": {
      "gender": "M",
      "first name": "Enayet Ullah Prodhan",
      "last name": "",
      "avatar": "https://static8.depositphotos.com/1009634/988/v/950/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg"
    },
    "rels": {
      "mother": "202de0ff-9c10-4e48-a040-c51cce52f976",
      "father": "c9b45e46-caf2-41b9-97f3-6db51d5c3901",
      "spouses": [
        "055c9541-67c0-4e97-9b92-fa0fba0b3621",
        "247a935c-5ec5-4db4-81cb-16fdca0faac9"
      ],
      "children": [
        "bf298225-3b71-4b34-ad90-44a8e2a1e324",
        "a6bcb623-d125-435d-a27e-58eb32e905e6",
        "06a15500-643d-433b-bd74-1b59df4ef212",
        "3cb99c9d-dcb5-4862-a509-be1d95950441",
        "fbc1f70c-b973-411c-960e-f941e794e849",
        "c4f2036a-a158-48b6-a791-bcc952d61fdf",
        "a4b79d29-a65e-4988-8c65-5eeb681d983d",
        "1d752dc2-ee2c-4438-9494-6e246ba5ecd2",
        "f622f68e-ff99-421d-b191-252862b85417",
        "c6d94a35-ef00-4c97-8c62-c0d4b25319ec"
      ]
    }
  },
  {
    "id": "055c9541-67c0-4e97-9b92-fa0fba0b3621",
    "data": {
      "gender": "F",
      "first name": "1st Mrs. Enayet Ullah",
      "last name": "",
      "avatar": "https://static8.depositphotos.com/1009634/988/v/950/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg"
    },
    "rels": {
      "spouses": [
        "29deae8d-214e-457c-b344-93ebfa8c2c4c"
      ],
      "children": [
        "bf298225-3b71-4b34-ad90-44a8e2a1e324",
        "a6bcb623-d125-435d-a27e-58eb32e905e6",
        "06a15500-643d-433b-bd74-1b59df4ef212",
        "3cb99c9d-dcb5-4862-a509-be1d95950441"
      ]
    }
  },
  {
    "id": "247a935c-5ec5-4db4-81cb-16fdca0faac9",
    "data": {
      "gender": "F",
      "first name": "Shukhjannesa",
      "last name": "",
      "avatar": "https://static8.depositphotos.com/1009634/988/v/950/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg"
    },
    "rels": {
      "spouses": [
        "29deae8d-214e-457c-b344-93ebfa8c2c4c"
      ],
      "children": [
        "fbc1f70c-b973-411c-960e-f941e794e849",
        "c4f2036a-a158-48b6-a791-bcc952d61fdf",
        "a4b79d29-a65e-4988-8c65-5eeb681d983d",
        "1d752dc2-ee2c-4438-9494-6e246ba5ecd2",
        "f622f68e-ff99-421d-b191-252862b85417",
        "c6d94a35-ef00-4c97-8c62-c0d4b25319ec"
      ]
    }
  },
  {
    "id": "2f0c2ab0-acb5-4bea-be05-926c0ed084ab",
    "data": {
      "gender": "M",
      "first name": "Joshim Uddin Prodhan",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "202de0ff-9c10-4e48-a040-c51cce52f976",
      "father": "c9b45e46-caf2-41b9-97f3-6db51d5c3901",
      "spouses": [
        "756962e3-33c6-4efb-a6bd-d4c9783bf77b"
      ]
    }
  },
  {
    "id": "756962e3-33c6-4efb-a6bd-d4c9783bf77b",
    "data": {
      "gender": "F",
      "first name": "Mrs. Joshim Uddin Prodhan",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "2f0c2ab0-acb5-4bea-be05-926c0ed084ab"
      ]
    }
  },
  {
    "id": "6b96979c-73ba-4aa9-90db-3e27b66ad77e",
    "data": {
      "gender": "M",
      "first name": "Nasir Uddin Prodhan",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "202de0ff-9c10-4e48-a040-c51cce52f976",
      "father": "c9b45e46-caf2-41b9-97f3-6db51d5c3901",
      "spouses": [
        "d7614ef9-17e5-4389-ba4b-1f0ea06b142d"
      ]
    }
  },
  {
    "id": "d7614ef9-17e5-4389-ba4b-1f0ea06b142d",
    "data": {
      "gender": "F",
      "first name": "Nasir Uddin Prodhan",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "6b96979c-73ba-4aa9-90db-3e27b66ad77e"
      ]
    }
  },
  {
    "id": "bf298225-3b71-4b34-ad90-44a8e2a1e324",
    "data": {
      "gender": "F",
      "first name": "Akimunnesa",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "055c9541-67c0-4e97-9b92-fa0fba0b3621",
      "father": "29deae8d-214e-457c-b344-93ebfa8c2c4c"
    }
  },
  {
    "id": "a6bcb623-d125-435d-a27e-58eb32e905e6",
    "data": {
      "gender": "M",
      "first name": "Nojirul Haque",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "055c9541-67c0-4e97-9b92-fa0fba0b3621",
      "father": "29deae8d-214e-457c-b344-93ebfa8c2c4c",
      "spouses": [
        "4434e700-20e7-4d58-bca8-e2cdb0745740",
        "d20d9522-9af7-4b66-bba1-4bfd2ee3b5c6"
      ],
      "children": [
        "34c0d710-a559-4c65-8ff0-6eb81cccafaa",
        "3dd04e9b-c746-470e-b358-051cd06fb26c",
        "cce06e89-0184-4c31-86ce-b9c56cfe69ac",
        "c5ef84d9-d18a-4f47-822b-1b2512ac153e",
        "56ddc3d2-867a-42d3-aaaf-11140b563951",
        "b980dff4-ff5f-4a33-b16d-d967749c98f6",
        "b2bf60c1-0c51-4341-bb30-95ca0b98c742",
        "b515ec1f-7d27-43d3-a786-8a8e6eb4843c"
      ]
    }
  },
  {
    "id": "4434e700-20e7-4d58-bca8-e2cdb0745740",
    "data": {
      "gender": "F",
      "first name": "Jorimon Haque",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "a6bcb623-d125-435d-a27e-58eb32e905e6"
      ],
      "children": [
        "34c0d710-a559-4c65-8ff0-6eb81cccafaa",
        "3dd04e9b-c746-470e-b358-051cd06fb26c",
        "cce06e89-0184-4c31-86ce-b9c56cfe69ac",
        "c5ef84d9-d18a-4f47-822b-1b2512ac153e"
      ]
    }
  },
  {
    "id": "d20d9522-9af7-4b66-bba1-4bfd2ee3b5c6",
    "data": {
      "gender": "F",
      "first name": "Zahida Haque",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "a6bcb623-d125-435d-a27e-58eb32e905e6"
      ],
      "children": [
        "56ddc3d2-867a-42d3-aaaf-11140b563951",
        "b980dff4-ff5f-4a33-b16d-d967749c98f6",
        "b2bf60c1-0c51-4341-bb30-95ca0b98c742",
        "b515ec1f-7d27-43d3-a786-8a8e6eb4843c"
      ]
    }
  },
  {
    "id": "06a15500-643d-433b-bd74-1b59df4ef212",
    "data": {
      "gender": "M",
      "first name": "Shahajol Haque",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "055c9541-67c0-4e97-9b92-fa0fba0b3621",
      "father": "29deae8d-214e-457c-b344-93ebfa8c2c4c",
      "spouses": [
        "3ed76f33-2840-440e-a5fe-534f54d9d758"
      ]
    }
  },
  {
    "id": "3ed76f33-2840-440e-a5fe-534f54d9d758",
    "data": {
      "gender": "F",
      "first name": "Mrs. Shahajol Haque",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "06a15500-643d-433b-bd74-1b59df4ef212"
      ]
    }
  },
  {
    "id": "3cb99c9d-dcb5-4862-a509-be1d95950441",
    "data": {
      "gender": "M",
      "first name": "Shirajol Haque",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "055c9541-67c0-4e97-9b92-fa0fba0b3621",
      "father": "29deae8d-214e-457c-b344-93ebfa8c2c4c",
      "spouses": [
        "2251e972-22f9-4601-9bd3-ca0a55c3bd62",
        "a31ebc11-11e5-4f7f-8f34-31888ed365d5"
      ]
    }
  },
  {
    "id": "2251e972-22f9-4601-9bd3-ca0a55c3bd62",
    "data": {
      "gender": "F",
      "first name": "Mrs. Shirajol Haque",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "3cb99c9d-dcb5-4862-a509-be1d95950441"
      ]
    }
  },
  {
    "id": "a31ebc11-11e5-4f7f-8f34-31888ed365d5",
    "data": {
      "gender": "F",
      "first name": "Rabeya Khatun",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "3cb99c9d-dcb5-4862-a509-be1d95950441"
      ]
    }
  },
  {
    "id": "fbc1f70c-b973-411c-960e-f941e794e849",
    "data": {
      "gender": "F",
      "first name": "Zabeda Khatun",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "father": "29deae8d-214e-457c-b344-93ebfa8c2c4c",
      "mother": "247a935c-5ec5-4db4-81cb-16fdca0faac9"
    }
  },
  {
    "id": "c4f2036a-a158-48b6-a791-bcc952d61fdf",
    "data": {
      "gender": "M",
      "first name": "Monjurul Haque",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "father": "29deae8d-214e-457c-b344-93ebfa8c2c4c",
      "mother": "247a935c-5ec5-4db4-81cb-16fdca0faac9",
      "spouses": [
        "ccd26e61-c477-4542-98b1-a0722497e1d2"
      ]
    }
  },
  {
    "id": "ccd26e61-c477-4542-98b1-a0722497e1d2",
    "data": {
      "gender": "F",
      "first name": "Fozilatunnesa",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "c4f2036a-a158-48b6-a791-bcc952d61fdf"
      ]
    }
  },
  {
    "id": "a4b79d29-a65e-4988-8c65-5eeb681d983d",
    "data": {
      "gender": "F",
      "first name": "Rohima Khatun",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "247a935c-5ec5-4db4-81cb-16fdca0faac9",
      "father": "29deae8d-214e-457c-b344-93ebfa8c2c4c",
      "spouses": [
        "66f9658f-d1b9-4a15-91fc-6c3ec69ea6ec"
      ]
    }
  },
  {
    "id": "66f9658f-d1b9-4a15-91fc-6c3ec69ea6ec",
    "data": {
      "gender": "M",
      "first name": "Husband of Rohima Khatun",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "a4b79d29-a65e-4988-8c65-5eeb681d983d"
      ]
    }
  },
  {
    "id": "1d752dc2-ee2c-4438-9494-6e246ba5ecd2",
    "data": {
      "gender": "F",
      "first name": "Jaheda Khatun",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "father": "29deae8d-214e-457c-b344-93ebfa8c2c4c",
      "mother": "247a935c-5ec5-4db4-81cb-16fdca0faac9",
      "spouses": [
        "3a78d606-fcfe-435d-bc6d-025a0099f397"
      ]
    }
  },
  {
    "id": "3a78d606-fcfe-435d-bc6d-025a0099f397",
    "data": {
      "gender": "M",
      "first name": "Husband of Jaheda Khatun",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "1d752dc2-ee2c-4438-9494-6e246ba5ecd2"
      ]
    }
  },
  {
    "id": "f622f68e-ff99-421d-b191-252862b85417",
    "data": {
      "gender": "M",
      "first name": "Zakiul Haque (Bacchu)",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "father": "29deae8d-214e-457c-b344-93ebfa8c2c4c",
      "mother": "247a935c-5ec5-4db4-81cb-16fdca0faac9",
      "spouses": [
        "2dadfc64-46a0-49eb-8af1-a65c1779102d"
      ]
    }
  },
  {
    "id": "2dadfc64-46a0-49eb-8af1-a65c1779102d",
    "data": {
      "gender": "F",
      "first name": "Shamsunnahar Lata",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "f622f68e-ff99-421d-b191-252862b85417"
      ]
    }
  },
  {
    "id": "c6d94a35-ef00-4c97-8c62-c0d4b25319ec",
    "data": {
      "gender": "M",
      "first name": "Nurul Haque (Tara Mia)",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "247a935c-5ec5-4db4-81cb-16fdca0faac9",
      "father": "29deae8d-214e-457c-b344-93ebfa8c2c4c",
      "spouses": [
        "c19aaba7-8f2b-43ab-9f40-81f12f1c9697"
      ]
    }
  },
  {
    "id": "c19aaba7-8f2b-43ab-9f40-81f12f1c9697",
    "data": {
      "gender": "F",
      "first name": "Ratna Haque",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "c6d94a35-ef00-4c97-8c62-c0d4b25319ec"
      ]
    }
  },
  {
    "id": "34c0d710-a559-4c65-8ff0-6eb81cccafaa",
    "data": {
      "gender": "M",
      "first name": "Mojammel Haque",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "4434e700-20e7-4d58-bca8-e2cdb0745740",
      "father": "a6bcb623-d125-435d-a27e-58eb32e905e6",
      "spouses": [
        "81019471-a73e-46a0-8a7c-8b30d5c3351a"
      ],
      "children": [
        "edaeb4b9-8ac9-4290-8285-72172e365d0b",
        "11399910-c4c1-4b37-a78f-4c63b49b67f1",
        "95def896-611e-49ad-8995-69bc8ac9292f",
        "2843d304-2663-4574-a3f2-c7736f097412",
        "96ff741a-0401-4ea5-bb15-a4d270fc3c3e",
        "646c46e6-d36b-4dab-b2e5-a928175769c7",
        "3055e79a-8dbf-466f-a662-5658c6783369"
      ]
    }
  },
  {
    "id": "81019471-a73e-46a0-8a7c-8b30d5c3351a",
    "data": {
      "gender": "F",
      "first name": "Afifa Haque",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "34c0d710-a559-4c65-8ff0-6eb81cccafaa"
      ],
      "children": [
        "edaeb4b9-8ac9-4290-8285-72172e365d0b",
        "11399910-c4c1-4b37-a78f-4c63b49b67f1",
        "95def896-611e-49ad-8995-69bc8ac9292f",
        "2843d304-2663-4574-a3f2-c7736f097412",
        "96ff741a-0401-4ea5-bb15-a4d270fc3c3e",
        "646c46e6-d36b-4dab-b2e5-a928175769c7",
        "3055e79a-8dbf-466f-a662-5658c6783369"
      ]
    }
  },
  {
    "id": "3dd04e9b-c746-470e-b358-051cd06fb26c",
    "data": {
      "gender": "M",
      "first name": "Fazlul Haque",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "4434e700-20e7-4d58-bca8-e2cdb0745740",
      "father": "a6bcb623-d125-435d-a27e-58eb32e905e6",
      "spouses": [
        "4f9d40d5-0868-4db9-811d-ace55a6e0067"
      ],
      "children": [
        "e2a846ed-75ae-4ce8-8655-c3fca3ba5a1f",
        "915539b4-d281-42a5-b59f-aa3fccb2c844",
        "7c62bafa-14aa-4cb2-87c2-29a86ca1b3a9",
        "1d0fb632-078c-46f7-bc51-22a9400a8091",
        "0acaca01-4c93-4032-bd24-73bd0b597be5",
        "c2f7a9f3-c5ea-46ad-9ae0-54d03601ea94",
        "32825c58-d63e-45ce-9a6a-a4746e5c460c",
        "2a5d054f-03ea-4e25-8c9c-39bd08bc1553",
        "c93b15f0-f92a-4b7a-b8da-fef84a1a8441",
        "c191f3c4-e34d-4379-ad26-2820d7cfeff9",
        "79555f27-766c-4367-bc72-72308340fd5c"
      ]
    }
  },
  {
    "id": "4f9d40d5-0868-4db9-811d-ace55a6e0067",
    "data": {
      "gender": "F",
      "first name": "Saleha Haque",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "3dd04e9b-c746-470e-b358-051cd06fb26c"
      ],
      "children": [
        "e2a846ed-75ae-4ce8-8655-c3fca3ba5a1f",
        "915539b4-d281-42a5-b59f-aa3fccb2c844",
        "7c62bafa-14aa-4cb2-87c2-29a86ca1b3a9",
        "1d0fb632-078c-46f7-bc51-22a9400a8091",
        "0acaca01-4c93-4032-bd24-73bd0b597be5",
        "c2f7a9f3-c5ea-46ad-9ae0-54d03601ea94",
        "32825c58-d63e-45ce-9a6a-a4746e5c460c",
        "2a5d054f-03ea-4e25-8c9c-39bd08bc1553",
        "c93b15f0-f92a-4b7a-b8da-fef84a1a8441",
        "c191f3c4-e34d-4379-ad26-2820d7cfeff9",
        "79555f27-766c-4367-bc72-72308340fd5c"
      ]
    }
  },
  {
    "id": "cce06e89-0184-4c31-86ce-b9c56cfe69ac",
    "data": {
      "gender": "F",
      "first name": "Dadi(Shorishabari)",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "4434e700-20e7-4d58-bca8-e2cdb0745740",
      "father": "a6bcb623-d125-435d-a27e-58eb32e905e6"
    }
  },
  {
    "id": "c5ef84d9-d18a-4f47-822b-1b2512ac153e",
    "data": {
      "gender": "F",
      "first name": "Dadi (Piarpur)",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "4434e700-20e7-4d58-bca8-e2cdb0745740",
      "father": "a6bcb623-d125-435d-a27e-58eb32e905e6"
    }
  },
  {
    "id": "56ddc3d2-867a-42d3-aaaf-11140b563951",
    "data": {
      "gender": "M",
      "first name": "A Z M Mojaharul Haque (Lal mia)",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "father": "a6bcb623-d125-435d-a27e-58eb32e905e6",
      "mother": "d20d9522-9af7-4b66-bba1-4bfd2ee3b5c6",
      "spouses": [
        "ba284c4e-a161-4336-838f-70dbd6ccd651"
      ],
      "children": [
        "529db563-a135-44e0-9b76-31b1c1751fbf",
        "89cc5931-b79f-457c-a7f8-b5001796770f",
        "3d3f7565-b878-42ee-9921-baf8e9cbc697",
        "8576b142-8fff-4f50-816e-103f91c1f463"
      ]
    }
  },
  {
    "id": "ba284c4e-a161-4336-838f-70dbd6ccd651",
    "data": {
      "gender": "F",
      "first name": "Mina Bilkis",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "56ddc3d2-867a-42d3-aaaf-11140b563951"
      ],
      "children": [
        "529db563-a135-44e0-9b76-31b1c1751fbf",
        "89cc5931-b79f-457c-a7f8-b5001796770f",
        "3d3f7565-b878-42ee-9921-baf8e9cbc697",
        "8576b142-8fff-4f50-816e-103f91c1f463"
      ]
    }
  },
  {
    "id": "b980dff4-ff5f-4a33-b16d-d967749c98f6",
    "data": {
      "gender": "F",
      "first name": "Nurunnahar Lila",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "father": "a6bcb623-d125-435d-a27e-58eb32e905e6",
      "mother": "d20d9522-9af7-4b66-bba1-4bfd2ee3b5c6",
      "spouses": [
        "a56248f9-3c26-4b93-9012-a2a0b0516c68"
      ]
    }
  },
  {
    "id": "a56248f9-3c26-4b93-9012-a2a0b0516c68",
    "data": {
      "gender": "M",
      "first name": "Husband of Nurunnahar Lila",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "b980dff4-ff5f-4a33-b16d-d967749c98f6"
      ]
    }
  },
  {
    "id": "b2bf60c1-0c51-4341-bb30-95ca0b98c742",
    "data": {
      "gender": "F",
      "first name": "Maqsuda Begum Parul",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "father": "a6bcb623-d125-435d-a27e-58eb32e905e6",
      "mother": "d20d9522-9af7-4b66-bba1-4bfd2ee3b5c6",
      "spouses": [
        "4992d116-5468-4843-be60-2bd705d4f53f"
      ]
    }
  },
  {
    "id": "4992d116-5468-4843-be60-2bd705d4f53f",
    "data": {
      "gender": "M",
      "first name": "Hasband of Maqsuda Begum Parul",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "b2bf60c1-0c51-4341-bb30-95ca0b98c742"
      ]
    }
  },
  {
    "id": "b515ec1f-7d27-43d3-a786-8a8e6eb4843c",
    "data": {
      "gender": "F",
      "first name": "Jahanara Begum Janu",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "father": "a6bcb623-d125-435d-a27e-58eb32e905e6",
      "mother": "d20d9522-9af7-4b66-bba1-4bfd2ee3b5c6",
      "spouses": [
        "f48d6625-b441-413e-8b65-d027f13b63fa"
      ]
    }
  },
  {
    "id": "f48d6625-b441-413e-8b65-d027f13b63fa",
    "data": {
      "gender": "M",
      "first name": "Husband of Jahanara Begum Janu",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "b515ec1f-7d27-43d3-a786-8a8e6eb4843c"
      ]
    }
  },
  {
    "id": "529db563-a135-44e0-9b76-31b1c1751fbf",
    "data": {
      "gender": "M",
      "first name": "Najmul Haque (Tuhin)",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "ba284c4e-a161-4336-838f-70dbd6ccd651",
      "father": "56ddc3d2-867a-42d3-aaaf-11140b563951",
      "spouses": [
        "c4060d40-cac7-4f52-8391-78a14c1ec814"
      ],
      "children": [
        "ef469d53-b8ea-4f08-8e2f-6fec0073b01e",
        "03ce7852-e5b5-4268-9cf7-ca155cf3a405"
      ]
    }
  },
  {
    "id": "c4060d40-cac7-4f52-8391-78a14c1ec814",
    "data": {
      "gender": "F",
      "first name": "Monowara Parvin",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "529db563-a135-44e0-9b76-31b1c1751fbf"
      ],
      "children": [
        "ef469d53-b8ea-4f08-8e2f-6fec0073b01e",
        "03ce7852-e5b5-4268-9cf7-ca155cf3a405"
      ]
    }
  },
  {
    "id": "ef469d53-b8ea-4f08-8e2f-6fec0073b01e",
    "data": {
      "gender": "M",
      "first name": "Abir Hasan",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "c4060d40-cac7-4f52-8391-78a14c1ec814",
      "father": "529db563-a135-44e0-9b76-31b1c1751fbf"
    }
  },
  {
    "id": "03ce7852-e5b5-4268-9cf7-ca155cf3a405",
    "data": {
      "gender": "M",
      "first name": "Daud Hasan (Alavi)",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "c4060d40-cac7-4f52-8391-78a14c1ec814",
      "father": "529db563-a135-44e0-9b76-31b1c1751fbf"
    }
  },
  {
    "id": "89cc5931-b79f-457c-a7f8-b5001796770f",
    "data": {
      "gender": "M",
      "first name": "Rashedul Haque (Sumon)",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "father": "56ddc3d2-867a-42d3-aaaf-11140b563951",
      "mother": "ba284c4e-a161-4336-838f-70dbd6ccd651",
      "spouses": [
        "11af53ae-6cfe-46b3-8e21-cb821c1d7834"
      ],
      "children": [
        "9a976d4d-6620-40fa-a352-ee0ffd82d2f7",
        "b320f8a4-fdb6-488c-aa04-cb29052a5c52"
      ]
    }
  },
  {
    "id": "11af53ae-6cfe-46b3-8e21-cb821c1d7834",
    "data": {
      "gender": "F",
      "first name": "Alo Haque",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "89cc5931-b79f-457c-a7f8-b5001796770f"
      ],
      "children": [
        "9a976d4d-6620-40fa-a352-ee0ffd82d2f7",
        "b320f8a4-fdb6-488c-aa04-cb29052a5c52"
      ]
    }
  },
  {
    "id": "9a976d4d-6620-40fa-a352-ee0ffd82d2f7",
    "data": {
      "gender": "M",
      "first name": "Sakibul Haque (Sakib)",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "father": "89cc5931-b79f-457c-a7f8-b5001796770f",
      "mother": "11af53ae-6cfe-46b3-8e21-cb821c1d7834"
    }
  },
  {
    "id": "b320f8a4-fdb6-488c-aa04-cb29052a5c52",
    "data": {
      "gender": "F",
      "first name": "Sanjida Haque",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "father": "89cc5931-b79f-457c-a7f8-b5001796770f",
      "mother": "11af53ae-6cfe-46b3-8e21-cb821c1d7834"
    }
  },
  {
    "id": "3d3f7565-b878-42ee-9921-baf8e9cbc697",
    "data": {
      "gender": "F",
      "first name": "Mahbuba Bilkis Nira",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "father": "56ddc3d2-867a-42d3-aaaf-11140b563951",
      "mother": "ba284c4e-a161-4336-838f-70dbd6ccd651",
      "spouses": [
        "82ad530d-48b4-4533-8d28-d40e6072703d"
      ],
      "children": [
        "e8f0fcb3-276e-4aaa-b977-a0ffed559432",
        "bcb2a66c-09a7-44e5-9a71-b70018a58ea4"
      ]
    }
  },
  {
    "id": "82ad530d-48b4-4533-8d28-d40e6072703d",
    "data": {
      "gender": "M",
      "first name": "Faruk",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "3d3f7565-b878-42ee-9921-baf8e9cbc697"
      ],
      "children": [
        "e8f0fcb3-276e-4aaa-b977-a0ffed559432",
        "bcb2a66c-09a7-44e5-9a71-b70018a58ea4"
      ]
    }
  },
  {
    "id": "e8f0fcb3-276e-4aaa-b977-a0ffed559432",
    "data": {
      "gender": "F",
      "first name": "Sauda Mehbub Noboni",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "father": "82ad530d-48b4-4533-8d28-d40e6072703d",
      "mother": "3d3f7565-b878-42ee-9921-baf8e9cbc697"
    }
  },
  {
    "id": "bcb2a66c-09a7-44e5-9a71-b70018a58ea4",
    "data": {
      "gender": "M",
      "first name": "Eram Al Mubin",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "father": "82ad530d-48b4-4533-8d28-d40e6072703d",
      "mother": "3d3f7565-b878-42ee-9921-baf8e9cbc697"
    }
  },
  {
    "id": "8576b142-8fff-4f50-816e-103f91c1f463",
    "data": {
      "gender": "F",
      "first name": "Muslima Haque Shapla",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "father": "56ddc3d2-867a-42d3-aaaf-11140b563951",
      "mother": "ba284c4e-a161-4336-838f-70dbd6ccd651",
      "spouses": [
        "d578ee0f-3357-466b-a2c6-586a455958d1"
      ]
    }
  },
  {
    "id": "d578ee0f-3357-466b-a2c6-586a455958d1",
    "data": {
      "gender": "M",
      "first name": "Husband of Shapla",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "8576b142-8fff-4f50-816e-103f91c1f463"
      ]
    }
  },
  {
    "id": "edaeb4b9-8ac9-4290-8285-72172e365d0b",
    "data": {
      "gender": "M",
      "first name": "Akramul Haque (Babul)",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "81019471-a73e-46a0-8a7c-8b30d5c3351a",
      "father": "34c0d710-a559-4c65-8ff0-6eb81cccafaa",
      "spouses": [
        "749c833e-bd29-41b5-85c0-8cecf8d7f9d6"
      ],
      "children": [
        "13861619-9b91-4a4e-84ec-f033ffc127d3"
      ]
    }
  },
  {
    "id": "749c833e-bd29-41b5-85c0-8cecf8d7f9d6",
    "data": {
      "gender": "F",
      "first name": "Hena",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "edaeb4b9-8ac9-4290-8285-72172e365d0b"
      ],
      "children": [
        "13861619-9b91-4a4e-84ec-f033ffc127d3"
      ]
    }
  },
  {
    "id": "13861619-9b91-4a4e-84ec-f033ffc127d3",
    "data": {
      "gender": "M",
      "first name": "Mushfiqu Haque (Upal)",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "749c833e-bd29-41b5-85c0-8cecf8d7f9d6",
      "father": "edaeb4b9-8ac9-4290-8285-72172e365d0b",
      "spouses": [
        "2e711c23-408b-4b71-a115-c63f1f456d4c"
      ],
      "children": [
        "86d49fdb-7f2c-42f5-84a9-f5ed26f92340",
        "072144e5-cfef-44a5-8d9b-f1b8c779d93a"
      ]
    }
  },
  {
    "id": "2e711c23-408b-4b71-a115-c63f1f456d4c",
    "data": {
      "gender": "F",
      "first name": "Mrs. Upal",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "13861619-9b91-4a4e-84ec-f033ffc127d3"
      ],
      "children": [
        "86d49fdb-7f2c-42f5-84a9-f5ed26f92340",
        "072144e5-cfef-44a5-8d9b-f1b8c779d93a"
      ]
    }
  },
  {
    "id": "86d49fdb-7f2c-42f5-84a9-f5ed26f92340",
    "data": {
      "gender": "M",
      "first name": "Zayenul Haque",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "2e711c23-408b-4b71-a115-c63f1f456d4c",
      "father": "13861619-9b91-4a4e-84ec-f033ffc127d3"
    }
  },
  {
    "id": "072144e5-cfef-44a5-8d9b-f1b8c779d93a",
    "data": {
      "gender": "F",
      "first name": "Ziyan",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "father": "13861619-9b91-4a4e-84ec-f033ffc127d3",
      "mother": "2e711c23-408b-4b71-a115-c63f1f456d4c"
    }
  },
  {
    "id": "11399910-c4c1-4b37-a78f-4c63b49b67f1",
    "data": {
      "gender": "F",
      "first name": "Morjina Islam Ela",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "81019471-a73e-46a0-8a7c-8b30d5c3351a",
      "father": "34c0d710-a559-4c65-8ff0-6eb81cccafaa",
      "spouses": [
        "be263466-9575-476e-9dd3-1d9005213a9a"
      ],
      "children": [
        "430f3d42-6435-4c74-ace1-a75f00e50416"
      ]
    }
  },
  {
    "id": "be263466-9575-476e-9dd3-1d9005213a9a",
    "data": {
      "gender": "M",
      "first name": "Husband of Ela",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "11399910-c4c1-4b37-a78f-4c63b49b67f1"
      ],
      "children": [
        "430f3d42-6435-4c74-ace1-a75f00e50416"
      ]
    }
  },
  {
    "id": "430f3d42-6435-4c74-ace1-a75f00e50416",
    "data": {
      "gender": "F",
      "first name": "Moushumi",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "11399910-c4c1-4b37-a78f-4c63b49b67f1",
      "father": "be263466-9575-476e-9dd3-1d9005213a9a",
      "spouses": [
        "da64063b-713a-4644-bd8a-b6e8938594f7"
      ],
      "children": [
        "ca9e9a51-d7ea-4717-90f6-901f11480ea9"
      ]
    }
  },
  {
    "id": "da64063b-713a-4644-bd8a-b6e8938594f7",
    "data": {
      "gender": "M",
      "first name": "Husband of Moushumi",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "430f3d42-6435-4c74-ace1-a75f00e50416"
      ],
      "children": [
        "ca9e9a51-d7ea-4717-90f6-901f11480ea9"
      ]
    }
  },
  {
    "id": "ca9e9a51-d7ea-4717-90f6-901f11480ea9",
    "data": {
      "gender": "M",
      "first name": "Son of Moushumi",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "father": "da64063b-713a-4644-bd8a-b6e8938594f7",
      "mother": "430f3d42-6435-4c74-ace1-a75f00e50416"
    }
  },
  {
    "id": "95def896-611e-49ad-8995-69bc8ac9292f",
    "data": {
      "gender": "M",
      "first name": "Mahmudul Haque (Selim) ",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "81019471-a73e-46a0-8a7c-8b30d5c3351a",
      "father": "34c0d710-a559-4c65-8ff0-6eb81cccafaa",
      "spouses": [
        "628292e1-ad5a-42bd-abeb-8231d29801e6"
      ],
      "children": [
        "fe5b9945-8fa0-403c-9a6f-e3d29ca5a3bc",
        "94beb0a3-9f0c-4388-b37b-75594fe80a82"
      ]
    }
  },
  {
    "id": "628292e1-ad5a-42bd-abeb-8231d29801e6",
    "data": {
      "gender": "F",
      "first name": "Shima",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "95def896-611e-49ad-8995-69bc8ac9292f"
      ],
      "children": [
        "fe5b9945-8fa0-403c-9a6f-e3d29ca5a3bc",
        "94beb0a3-9f0c-4388-b37b-75594fe80a82"
      ]
    }
  },
  {
    "id": "fe5b9945-8fa0-403c-9a6f-e3d29ca5a3bc",
    "data": {
      "gender": "F",
      "first name": "Ethaka",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "628292e1-ad5a-42bd-abeb-8231d29801e6",
      "father": "95def896-611e-49ad-8995-69bc8ac9292f",
      "spouses": [
        "262ee762-c8ab-4b06-8014-e329ca22c548"
      ],
      "children": [
        "8d240969-0a0e-4643-9c0c-f9decf68c670"
      ]
    }
  },
  {
    "id": "262ee762-c8ab-4b06-8014-e329ca22c548",
    "data": {
      "gender": "M",
      "first name": "Husband of Ethaka",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "fe5b9945-8fa0-403c-9a6f-e3d29ca5a3bc"
      ],
      "children": [
        "8d240969-0a0e-4643-9c0c-f9decf68c670"
      ]
    }
  },
  {
    "id": "8d240969-0a0e-4643-9c0c-f9decf68c670",
    "data": {
      "gender": "F",
      "first name": "Daughter of Ethaka",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "father": "262ee762-c8ab-4b06-8014-e329ca22c548",
      "mother": "fe5b9945-8fa0-403c-9a6f-e3d29ca5a3bc"
    }
  },
  {
    "id": "94beb0a3-9f0c-4388-b37b-75594fe80a82",
    "data": {
      "gender": "M",
      "first name": "Evan",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "father": "95def896-611e-49ad-8995-69bc8ac9292f",
      "mother": "628292e1-ad5a-42bd-abeb-8231d29801e6"
    }
  },
  {
    "id": "2843d304-2663-4574-a3f2-c7736f097412",
    "data": {
      "gender": "M",
      "first name": "Shahinul Haque (Ratan)",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "81019471-a73e-46a0-8a7c-8b30d5c3351a",
      "father": "34c0d710-a559-4c65-8ff0-6eb81cccafaa",
      "spouses": [
        "244af17c-e8ac-4edb-80f9-a63a5d6e729e"
      ],
      "children": [
        "1af5a8de-bd32-4efc-a671-df3809ff9de1"
      ]
    }
  },
  {
    "id": "244af17c-e8ac-4edb-80f9-a63a5d6e729e",
    "data": {
      "gender": "F",
      "first name": "Ity",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "2843d304-2663-4574-a3f2-c7736f097412"
      ],
      "children": [
        "1af5a8de-bd32-4efc-a671-df3809ff9de1"
      ]
    }
  },
  {
    "id": "1af5a8de-bd32-4efc-a671-df3809ff9de1",
    "data": {
      "gender": "F",
      "first name": "Ontu",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "244af17c-e8ac-4edb-80f9-a63a5d6e729e",
      "father": "2843d304-2663-4574-a3f2-c7736f097412",
      "spouses": [
        "cb6be6cf-6cf7-40d8-a25f-ed7407ef9e69"
      ],
      "children": [
        "2b79e73b-5a01-4378-b93a-7ec127420bb6"
      ]
    }
  },
  {
    "id": "cb6be6cf-6cf7-40d8-a25f-ed7407ef9e69",
    "data": {
      "gender": "M",
      "first name": "Husband of Ontu",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "1af5a8de-bd32-4efc-a671-df3809ff9de1"
      ],
      "children": [
        "2b79e73b-5a01-4378-b93a-7ec127420bb6"
      ]
    }
  },
  {
    "id": "2b79e73b-5a01-4378-b93a-7ec127420bb6",
    "data": {
      "gender": "M",
      "first name": "Son of Ontu",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "1af5a8de-bd32-4efc-a671-df3809ff9de1",
      "father": "cb6be6cf-6cf7-40d8-a25f-ed7407ef9e69"
    }
  },
  {
    "id": "96ff741a-0401-4ea5-bb15-a4d270fc3c3e",
    "data": {
      "gender": "M",
      "first name": "Rezaul Haque (Shopon)",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "81019471-a73e-46a0-8a7c-8b30d5c3351a",
      "father": "34c0d710-a559-4c65-8ff0-6eb81cccafaa",
      "spouses": [
        "80741bdf-e994-4777-89f6-58a037b230e1",
        "6a1514fd-040d-4c30-b88a-62405d589336"
      ],
      "children": [
        "62e8bf9a-1527-497d-8c3b-1f68e11a6a2f",
        "08b7c1a7-5997-496e-9c18-47fe8e240e91"
      ]
    }
  },
  {
    "id": "80741bdf-e994-4777-89f6-58a037b230e1",
    "data": {
      "gender": "F",
      "first name": "Nasrin",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "96ff741a-0401-4ea5-bb15-a4d270fc3c3e"
      ],
      "children": [
        "62e8bf9a-1527-497d-8c3b-1f68e11a6a2f"
      ]
    }
  },
  {
    "id": "62e8bf9a-1527-497d-8c3b-1f68e11a6a2f",
    "data": {
      "gender": "F",
      "first name": "Riyasat Binte Reza (Priyom)",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "80741bdf-e994-4777-89f6-58a037b230e1",
      "father": "96ff741a-0401-4ea5-bb15-a4d270fc3c3e",
      "spouses": [
        "618fe35c-c6ff-4f07-b694-b59377a2bf52"
      ],
      "children": [
        "afc12d59-f38a-47bf-b56e-f65352eefe87"
      ]
    }
  },
  {
    "id": "618fe35c-c6ff-4f07-b694-b59377a2bf52",
    "data": {
      "gender": "M",
      "first name": "Husband of Priyom",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "62e8bf9a-1527-497d-8c3b-1f68e11a6a2f"
      ],
      "children": [
        "afc12d59-f38a-47bf-b56e-f65352eefe87"
      ]
    }
  },
  {
    "id": "afc12d59-f38a-47bf-b56e-f65352eefe87",
    "data": {
      "gender": "F",
      "first name": "Daughter of Priyom",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "62e8bf9a-1527-497d-8c3b-1f68e11a6a2f",
      "father": "618fe35c-c6ff-4f07-b694-b59377a2bf52"
    }
  },
  {
    "id": "6a1514fd-040d-4c30-b88a-62405d589336",
    "data": {
      "gender": "F",
      "first name": "Tanjina",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "96ff741a-0401-4ea5-bb15-a4d270fc3c3e"
      ],
      "children": [
        "08b7c1a7-5997-496e-9c18-47fe8e240e91"
      ]
    }
  },
  {
    "id": "08b7c1a7-5997-496e-9c18-47fe8e240e91",
    "data": {
      "gender": "F",
      "first name": "Dirasat Binte Reza",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "father": "96ff741a-0401-4ea5-bb15-a4d270fc3c3e",
      "mother": "6a1514fd-040d-4c30-b88a-62405d589336"
    }
  },
  {
    "id": "646c46e6-d36b-4dab-b2e5-a928175769c7",
    "data": {
      "gender": "M",
      "first name": "Ahsanul Haque (Tapan)",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "81019471-a73e-46a0-8a7c-8b30d5c3351a",
      "father": "34c0d710-a559-4c65-8ff0-6eb81cccafaa",
      "spouses": [
        "6dc42c99-3c0a-4a26-9154-5fe4fd68aecb"
      ],
      "children": [
        "94b10319-1883-4e09-987a-653f9acb0c5e"
      ]
    }
  },
  {
    "id": "6dc42c99-3c0a-4a26-9154-5fe4fd68aecb",
    "data": {
      "gender": "F",
      "first name": "Boby",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "646c46e6-d36b-4dab-b2e5-a928175769c7"
      ],
      "children": [
        "94b10319-1883-4e09-987a-653f9acb0c5e"
      ]
    }
  },
  {
    "id": "94b10319-1883-4e09-987a-653f9acb0c5e",
    "data": {
      "gender": "F",
      "first name": "Namrata",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "6dc42c99-3c0a-4a26-9154-5fe4fd68aecb",
      "father": "646c46e6-d36b-4dab-b2e5-a928175769c7",
      "spouses": [
        "b2365eb6-c267-4a43-946c-b09a6516a6cc"
      ]
    }
  },
  {
    "id": "b2365eb6-c267-4a43-946c-b09a6516a6cc",
    "data": {
      "gender": "M",
      "first name": "Husband of Namrata",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "94b10319-1883-4e09-987a-653f9acb0c5e"
      ]
    }
  },
  {
    "id": "3055e79a-8dbf-466f-a662-5658c6783369",
    "data": {
      "gender": "M",
      "first name": "Asadul Haque (Tarek) ",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "81019471-a73e-46a0-8a7c-8b30d5c3351a",
      "father": "34c0d710-a559-4c65-8ff0-6eb81cccafaa",
      "spouses": [
        "c2bf611b-6d4a-46d5-ae92-84f3cb596c3d"
      ],
      "children": [
        "674016a4-cb8e-475e-8291-86c3a3d565c3",
        "2985fe42-1b97-47c2-a4d2-66c5dae9f49e"
      ]
    }
  },
  {
    "id": "c2bf611b-6d4a-46d5-ae92-84f3cb596c3d",
    "data": {
      "gender": "F",
      "first name": "Wife of Tarek",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "3055e79a-8dbf-466f-a662-5658c6783369"
      ],
      "children": [
        "674016a4-cb8e-475e-8291-86c3a3d565c3",
        "2985fe42-1b97-47c2-a4d2-66c5dae9f49e"
      ]
    }
  },
  {
    "id": "674016a4-cb8e-475e-8291-86c3a3d565c3",
    "data": {
      "gender": "M",
      "first name": "Samuel Haque",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "c2bf611b-6d4a-46d5-ae92-84f3cb596c3d",
      "father": "3055e79a-8dbf-466f-a662-5658c6783369"
    }
  },
  {
    "id": "2985fe42-1b97-47c2-a4d2-66c5dae9f49e",
    "data": {
      "gender": "M",
      "first name": "Daniel Haque",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "c2bf611b-6d4a-46d5-ae92-84f3cb596c3d",
      "father": "3055e79a-8dbf-466f-a662-5658c6783369"
    }
  },
  {
    "id": "e2a846ed-75ae-4ce8-8655-c3fca3ba5a1f",
    "data": {
      "gender": "M",
      "first name": "Saidul Haque (Sayed)",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "4f9d40d5-0868-4db9-811d-ace55a6e0067",
      "father": "3dd04e9b-c746-470e-b358-051cd06fb26c",
      "spouses": [
        "f8fd8383-0017-4363-bd14-72a584659dfd"
      ],
      "children": [
        "55480fc1-ea2b-43ca-8823-564cef348e9f"
      ]
    }
  },
  {
    "id": "f8fd8383-0017-4363-bd14-72a584659dfd",
    "data": {
      "gender": "F",
      "first name": "Muslima Haque (Shapla)",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "e2a846ed-75ae-4ce8-8655-c3fca3ba5a1f"
      ],
      "children": [
        "55480fc1-ea2b-43ca-8823-564cef348e9f"
      ]
    }
  },
  {
    "id": "55480fc1-ea2b-43ca-8823-564cef348e9f",
    "data": {
      "gender": "M",
      "first name": "Zahin Haque",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "father": "e2a846ed-75ae-4ce8-8655-c3fca3ba5a1f",
      "mother": "f8fd8383-0017-4363-bd14-72a584659dfd"
    }
  },
  {
    "id": "915539b4-d281-42a5-b59f-aa3fccb2c844",
    "data": {
      "gender": "M",
      "first name": "(Late) Saiful Haque (Saif)",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "4f9d40d5-0868-4db9-811d-ace55a6e0067",
      "father": "3dd04e9b-c746-470e-b358-051cd06fb26c",
      "spouses": [
        "3efe695b-839e-4d2b-a463-f5bc7eaf6b05"
      ],
      "children": [
        "0763b723-7c3f-469b-a11f-f28b27483bea"
      ]
    }
  },
  {
    "id": "3efe695b-839e-4d2b-a463-f5bc7eaf6b05",
    "data": {
      "gender": "F",
      "first name": "Fahmida Yesmin",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "915539b4-d281-42a5-b59f-aa3fccb2c844"
      ],
      "children": [
        "0763b723-7c3f-469b-a11f-f28b27483bea"
      ]
    }
  },
  {
    "id": "0763b723-7c3f-469b-a11f-f28b27483bea",
    "data": {
      "gender": "F",
      "first name": "Namira",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "3efe695b-839e-4d2b-a463-f5bc7eaf6b05",
      "father": "915539b4-d281-42a5-b59f-aa3fccb2c844"
    }
  },
  {
    "id": "7c62bafa-14aa-4cb2-87c2-29a86ca1b3a9",
    "data": {
      "gender": "M",
      "first name": "Mahbubul Haque",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "4f9d40d5-0868-4db9-811d-ace55a6e0067",
      "father": "3dd04e9b-c746-470e-b358-051cd06fb26c",
      "spouses": [
        "7a187009-3ff6-4fdb-8ebb-f20d692ea320"
      ],
      "children": [
        "e2a870f5-5972-4a2d-9913-5e7b3b48993b",
        "49992762-5219-467c-83e4-e30957bf8caf"
      ]
    }
  },
  {
    "id": "7a187009-3ff6-4fdb-8ebb-f20d692ea320",
    "data": {
      "gender": "F",
      "first name": "Saida Hashmi Ruma",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "7c62bafa-14aa-4cb2-87c2-29a86ca1b3a9"
      ],
      "children": [
        "e2a870f5-5972-4a2d-9913-5e7b3b48993b",
        "49992762-5219-467c-83e4-e30957bf8caf"
      ]
    }
  },
  {
    "id": "e2a870f5-5972-4a2d-9913-5e7b3b48993b",
    "data": {
      "gender": "F",
      "first name": "Fariha Binte Mahbub (Upoma)",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "7a187009-3ff6-4fdb-8ebb-f20d692ea320",
      "father": "7c62bafa-14aa-4cb2-87c2-29a86ca1b3a9"
    }
  },
  {
    "id": "49992762-5219-467c-83e4-e30957bf8caf",
    "data": {
      "gender": "F",
      "first name": "Peu",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "7a187009-3ff6-4fdb-8ebb-f20d692ea320",
      "father": "7c62bafa-14aa-4cb2-87c2-29a86ca1b3a9"
    }
  },
  {
    "id": "1d0fb632-078c-46f7-bc51-22a9400a8091",
    "data": {
      "gender": "M",
      "first name": "Shohidul Haque (Shohid)",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "4f9d40d5-0868-4db9-811d-ace55a6e0067",
      "father": "3dd04e9b-c746-470e-b358-051cd06fb26c",
      "spouses": [
        "4e8af864-e2b7-4de9-a5a6-250805901610"
      ],
      "children": [
        "a66ed984-0c88-4ec6-adde-f64f9867e473",
        "97601ff3-59c6-47b1-bb3c-d4ec5cb4804f"
      ]
    }
  },
  {
    "id": "4e8af864-e2b7-4de9-a5a6-250805901610",
    "data": {
      "gender": "F",
      "first name": "Moli",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "1d0fb632-078c-46f7-bc51-22a9400a8091"
      ],
      "children": [
        "a66ed984-0c88-4ec6-adde-f64f9867e473",
        "97601ff3-59c6-47b1-bb3c-d4ec5cb4804f"
      ]
    }
  },
  {
    "id": "a66ed984-0c88-4ec6-adde-f64f9867e473",
    "data": {
      "gender": "M",
      "first name": "Munif",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "4e8af864-e2b7-4de9-a5a6-250805901610",
      "father": "1d0fb632-078c-46f7-bc51-22a9400a8091"
    }
  },
  {
    "id": "97601ff3-59c6-47b1-bb3c-d4ec5cb4804f",
    "data": {
      "gender": "F",
      "first name": "Samiha",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "4e8af864-e2b7-4de9-a5a6-250805901610",
      "father": "1d0fb632-078c-46f7-bc51-22a9400a8091"
    }
  },
  {
    "id": "0acaca01-4c93-4032-bd24-73bd0b597be5",
    "data": {
      "gender": "M",
      "first name": "Masudul Haque",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "4f9d40d5-0868-4db9-811d-ace55a6e0067",
      "father": "3dd04e9b-c746-470e-b358-051cd06fb26c",
      "spouses": [
        "93823d6d-f7bc-49e7-9a97-460649d3c8dd"
      ],
      "children": [
        "e84843a3-71e7-49c2-b348-bd12554dcbab",
        "777b9434-ef02-43ca-8267-9e9d517a7635"
      ]
    }
  },
  {
    "id": "93823d6d-f7bc-49e7-9a97-460649d3c8dd",
    "data": {
      "gender": "F",
      "first name": "Meghna",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "0acaca01-4c93-4032-bd24-73bd0b597be5"
      ],
      "children": [
        "e84843a3-71e7-49c2-b348-bd12554dcbab",
        "777b9434-ef02-43ca-8267-9e9d517a7635"
      ]
    }
  },
  {
    "id": "e84843a3-71e7-49c2-b348-bd12554dcbab",
    "data": {
      "gender": "M",
      "first name": "Alif",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "93823d6d-f7bc-49e7-9a97-460649d3c8dd",
      "father": "0acaca01-4c93-4032-bd24-73bd0b597be5"
    }
  },
  {
    "id": "777b9434-ef02-43ca-8267-9e9d517a7635",
    "data": {
      "gender": "F",
      "first name": "Labib",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "93823d6d-f7bc-49e7-9a97-460649d3c8dd",
      "father": "0acaca01-4c93-4032-bd24-73bd0b597be5"
    }
  },
  {
    "id": "c2f7a9f3-c5ea-46ad-9ae0-54d03601ea94",
    "data": {
      "gender": "M",
      "first name": "Anowarul Haque (Anowar)",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "4f9d40d5-0868-4db9-811d-ace55a6e0067",
      "father": "3dd04e9b-c746-470e-b358-051cd06fb26c",
      "spouses": [
        "06c3e668-2362-4184-a092-772b4e3d77a3"
      ],
      "children": [
        "ae8aa523-d2c3-40fb-8548-bec9966b04ef",
        "e47db2c2-b624-4474-8b7d-9614e7dce362"
      ]
    }
  },
  {
    "id": "06c3e668-2362-4184-a092-772b4e3d77a3",
    "data": {
      "gender": "F",
      "first name": "Ripa Haque",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "c2f7a9f3-c5ea-46ad-9ae0-54d03601ea94"
      ],
      "children": [
        "ae8aa523-d2c3-40fb-8548-bec9966b04ef",
        "e47db2c2-b624-4474-8b7d-9614e7dce362"
      ]
    }
  },
  {
    "id": "ae8aa523-d2c3-40fb-8548-bec9966b04ef",
    "data": {
      "gender": "M",
      "first name": "Tanveerul Haque Mahadi",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "06c3e668-2362-4184-a092-772b4e3d77a3",
      "father": "c2f7a9f3-c5ea-46ad-9ae0-54d03601ea94"
    }
  },
  {
    "id": "e47db2c2-b624-4474-8b7d-9614e7dce362",
    "data": {
      "gender": "M",
      "first name": "Hamdi",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "06c3e668-2362-4184-a092-772b4e3d77a3",
      "father": "c2f7a9f3-c5ea-46ad-9ae0-54d03601ea94"
    }
  },
  {
    "id": "32825c58-d63e-45ce-9a6a-a4746e5c460c",
    "data": {
      "gender": "M",
      "first name": "Azazul Haque (Azaz)",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "4f9d40d5-0868-4db9-811d-ace55a6e0067",
      "father": "3dd04e9b-c746-470e-b358-051cd06fb26c",
      "spouses": [
        "77c66189-5a79-4e58-9c9b-591884e3e71f"
      ],
      "children": [
        "e3fe8d30-6fd8-4b44-8134-478a7f0da3a0",
        "d7a46eda-2902-4389-a5d2-6ea8cd0d5f39"
      ]
    }
  },
  {
    "id": "77c66189-5a79-4e58-9c9b-591884e3e71f",
    "data": {
      "gender": "F",
      "first name": "Rozi Haque",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "32825c58-d63e-45ce-9a6a-a4746e5c460c"
      ],
      "children": [
        "e3fe8d30-6fd8-4b44-8134-478a7f0da3a0",
        "d7a46eda-2902-4389-a5d2-6ea8cd0d5f39"
      ]
    }
  },
  {
    "id": "e3fe8d30-6fd8-4b44-8134-478a7f0da3a0",
    "data": {
      "gender": "M",
      "first name": "Zarif Haque",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "77c66189-5a79-4e58-9c9b-591884e3e71f",
      "father": "32825c58-d63e-45ce-9a6a-a4746e5c460c"
    }
  },
  {
    "id": "d7a46eda-2902-4389-a5d2-6ea8cd0d5f39",
    "data": {
      "gender": "F",
      "first name": "Raisa Haque",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "77c66189-5a79-4e58-9c9b-591884e3e71f",
      "father": "32825c58-d63e-45ce-9a6a-a4746e5c460c"
    }
  },
  {
    "id": "2a5d054f-03ea-4e25-8c9c-39bd08bc1553",
    "data": {
      "gender": "M",
      "first name": "Sanowarul Haque",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "4f9d40d5-0868-4db9-811d-ace55a6e0067",
      "father": "3dd04e9b-c746-470e-b358-051cd06fb26c"
    }
  },
  {
    "id": "c93b15f0-f92a-4b7a-b8da-fef84a1a8441",
    "data": {
      "gender": "M",
      "first name": "Sazzadu Haque (Sazzad)",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "4f9d40d5-0868-4db9-811d-ace55a6e0067",
      "father": "3dd04e9b-c746-470e-b358-051cd06fb26c",
      "spouses": [
        "89279791-ef44-463a-bd61-d5a671b4dbbe"
      ],
      "children": [
        "9c244ec3-59da-48fc-9d4d-3dcd17268c10",
        "fd84a0b4-177b-4628-952a-518f49866121"
      ]
    }
  },
  {
    "id": "89279791-ef44-463a-bd61-d5a671b4dbbe",
    "data": {
      "gender": "F",
      "first name": "Shimu",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "c93b15f0-f92a-4b7a-b8da-fef84a1a8441"
      ],
      "children": [
        "9c244ec3-59da-48fc-9d4d-3dcd17268c10",
        "fd84a0b4-177b-4628-952a-518f49866121"
      ]
    }
  },
  {
    "id": "9c244ec3-59da-48fc-9d4d-3dcd17268c10",
    "data": {
      "gender": "M",
      "first name": "Shayan",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "89279791-ef44-463a-bd61-d5a671b4dbbe",
      "father": "c93b15f0-f92a-4b7a-b8da-fef84a1a8441"
    }
  },
  {
    "id": "fd84a0b4-177b-4628-952a-518f49866121",
    "data": {
      "gender": "F",
      "first name": "Shayra",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "89279791-ef44-463a-bd61-d5a671b4dbbe",
      "father": "c93b15f0-f92a-4b7a-b8da-fef84a1a8441"
    }
  },
  {
    "id": "c191f3c4-e34d-4379-ad26-2820d7cfeff9",
    "data": {
      "gender": "M",
      "first name": "Majharul Haque (Majhar)",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "4f9d40d5-0868-4db9-811d-ace55a6e0067",
      "father": "3dd04e9b-c746-470e-b358-051cd06fb26c",
      "spouses": [
        "3ca280d4-c998-4e85-96b4-716363ea2f47"
      ],
      "children": [
        "c3e45772-3a30-4fb1-a504-f81caf241e1e",
        "734c931a-b876-4e93-9ddd-1bf9234e436b"
      ]
    }
  },
  {
    "id": "3ca280d4-c998-4e85-96b4-716363ea2f47",
    "data": {
      "gender": "F",
      "first name": "Kamrul",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "c191f3c4-e34d-4379-ad26-2820d7cfeff9"
      ],
      "children": [
        "c3e45772-3a30-4fb1-a504-f81caf241e1e",
        "734c931a-b876-4e93-9ddd-1bf9234e436b"
      ]
    }
  },
  {
    "id": "c3e45772-3a30-4fb1-a504-f81caf241e1e",
    "data": {
      "gender": "F",
      "first name": "Tasfia Farzin",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "3ca280d4-c998-4e85-96b4-716363ea2f47",
      "father": "c191f3c4-e34d-4379-ad26-2820d7cfeff9"
    }
  },
  {
    "id": "734c931a-b876-4e93-9ddd-1bf9234e436b",
    "data": {
      "gender": "M",
      "first name": "Arshan Jawad Haque",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "3ca280d4-c998-4e85-96b4-716363ea2f47",
      "father": "c191f3c4-e34d-4379-ad26-2820d7cfeff9"
    }
  },
  {
    "id": "79555f27-766c-4367-bc72-72308340fd5c",
    "data": {
      "gender": "M",
      "first name": "Emdadul Haque (Emdad)",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "4f9d40d5-0868-4db9-811d-ace55a6e0067",
      "father": "3dd04e9b-c746-470e-b358-051cd06fb26c",
      "spouses": [
        "6267229d-222e-48da-afa6-acca3e7b1c23"
      ],
      "children": [
        "2c899817-5db0-4c26-81f2-1b0be7b652d6"
      ]
    }
  },
  {
    "id": "6267229d-222e-48da-afa6-acca3e7b1c23",
    "data": {
      "gender": "F",
      "first name": "Panna",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "79555f27-766c-4367-bc72-72308340fd5c"
      ],
      "children": [
        "2c899817-5db0-4c26-81f2-1b0be7b652d6"
      ]
    }
  },
  {
    "id": "2c899817-5db0-4c26-81f2-1b0be7b652d6",
    "data": {
      "gender": "M",
      "first name": "Ebadul Haque",
      "last name": "",
      "avatar": ""
    },
    "rels": {
      "mother": "6267229d-222e-48da-afa6-acca3e7b1c23",
      "father": "79555f27-766c-4367-bc72-72308340fd5c"
    }
  }
]
    }
  
  }

  render() {
    return <div className="f3" id="FamilyChart" ref={this.cont}></div>;
  }
}
    