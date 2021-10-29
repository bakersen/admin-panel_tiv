/* eslint-disable prettier/prettier */


const posts = [
  {
    order_id: 12345,
    datePosted: "2021-09-11T08:51:44.517Z"
  },
  {
    order_id: 12346,
    datePosted: "2021-08-11T08:51:44.517Z"
  },
  {
    order_id: 12347,
    datePosted: "2020-10-11T08:51:44.517Z"
  }
]

posts.sort((a, b) => {
  return new Date(b.datePosted) - new Date(a.datePosted); // ascending
})

console.log(posts)