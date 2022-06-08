const Foods = [
    {
        id: 1,
        title: "Andijon oshi",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjzrDsR5HUN4agrYuaA2fvW1I7N3oMMo_8mA&usqp=CAU",
        money: 2.3,
        theRest: 15,
        foodType: "hot-dishes",
        count: 1
    },
    {
        id: 2,
        title: "Salted Pasta with mushroom sauce",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZK5T381WkkcEViQk_wGo-QxLrMpqWrRts1g&usqp=CAU",
        money: 2.69,
        theRest: 20,
        foodType: "cold-dishes",
        count: 1
    },
    {
        id: 3,
        title: "1-3 yoshlik bolalar uchun taom",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuznVEo5yu_o2ZUkyUe49AKIiyDUrzwaqJMQ&usqp=CAU",
        money: 2.3,
        theRest: 15,
        foodType: "hot-dishes",
        count: 1
    },
    {
        id: 4,
        title: "Salted Pasta with mushroom sauce",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwhMyJl3K2HSRHK8alcdngngRdZFlSs4S7pg&usqp=CAU",
        money: 2.69,
        theRest: 20,
        foodType: "cold-dishes",
        count: 1
    },
    {
        id: 5,
        title: "Beef dumpling in hot and sour soup",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjogufViGSAGO3F2nF0cv08TRonbf8W6IIJA&usqp=CAU",
        money: 3.3,
        theRest: 8,
        foodType: "soup",
        count: 1
    },
    {
        id: 6,
        title: "Hot spicy fried rice with omelet",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvlfWBqijcWNehuBjJssg72arABs29pWlgxw&usqp=CAU",
        money: 3.69,
        theRest: 10,
        foodType: "soup",
        count: 1
    },
    {
        id: 7,
        title: "Spicy seasoned seafood noodles",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIzsXhOb2ICbw0p42GoKqCQrvfmLWklAXuLA&usqp=CAU",
        money: 3.49,
        theRest: 6,
        foodType: "hot-dishes",
        count: 1
    },
    {
        id: 8,
        title: "Salted Pasta with mushroom sauce",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAH3exGDlUaRj_gNhcd1meaA36yuw5VE9eIQ&usqp=CAU",
        money: 2.69,
        theRest: 11,
        foodType: "soup",
        count: 1
    },
    {
        id: 9,
        title: "Spicy seasoned seafood noodles",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRHxu2B3_5ha7Eq1zNS1y1AQXYeEKxdVIUYA&usqp=CAU",
        money: 2.3,
        theRest: 15,
        foodType: "hot-dishes",
        count: 1
    },
    {
        id: 10,
        title: "Taom",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0B0v-xS9bKZJv54NEfWwURNDM5-dE3oQGEA&usqp=CAU",
        money: 2.69,
        theRest: 20,
        foodType: "cold-dishes",
        count: 1
    },
    {
        id: 11,
        title: "Spicy seasoned seafood noodles",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6N94ACyVYh75P4HS9I2KDI-VU2TgpMDDCkA&usqp=CAU",
        money: 2.3,
        theRest: 15,
        foodType: "hot-dishes",
        count: 1
    },
    {
        id: 12,
        title: "Salted Pasta with mushroom sauce",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdwO4iw1rwWAQi3ju0OAEXWf_VM32lWPkjSQ&usqp=CAU",
        money: 2.69,
        theRest: 20,
        foodType: "cold-dishes",
        count: 1
    },
    {
        id: 13,
        title: "Beef dumpling in hot and sour soup",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHwnSj0Po8pegkrWRnGVSo5WvxjnjNvgYsQ&usqp=CAU",
        money: 3.3,
        theRest: 8,
        foodType: "soup",
        count: 1
    },
    {
        id: 14,
        title: "Hot spicy fried rice with omelet",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2cQaYxB_OoWOcCX0qImdqICw_kHlVfsW6qA&usqp=CAU",
        money: 1.6,
        theRest: 5,
        foodType: "soup",
        count: 1
    },
    {
        id: 15,
        title: "Spicy seasoned seafood noodles",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIpDJPMO9WliGXiCsoEI816JOH9t48Ihzp5g&usqp=CAU",
        money: 3.49,
        theRest: 14,
        foodType: "hot-dishes",
        count: 1
    },
    {
        id: 16,
        title: "Salted Pasta with mushroom sauce",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEw2yw4bybSyh3hWcdd2LvQ31imrCiBVCUVA&usqp=CAU",
        money: 2.69,
        theRest: 6,
        foodType: "soup",
        count: 1
    },
];

export default Foods;